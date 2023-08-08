import {stopSubmit} from "redux-form";
import {getFriendsTC} from "../../../../entities/viewer";
import {sessionAPI, setAuthUserDataTC} from "../../../../entities/session";
import { captchaTC } from "../../../../entities/captcha";


export const loginTC = (loginData: any) => async (dispatch: any) => {
    try {
        const {resultCode, messages} = await sessionAPI.login(loginData);
        if(resultCode === 0) {
            dispatch(setAuthUserDataTC());
            dispatch(getFriendsTC());
        }
        else {
            if(resultCode === 10) {
                dispatch(captchaTC())
            }
            const message = messages.length > 0 ? messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message}));
        }
    } catch (error) {}
}

