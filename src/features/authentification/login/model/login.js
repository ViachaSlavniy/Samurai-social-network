import {stopSubmit} from "redux-form";
import {getFriendsTC} from "../../../../entities/viewer/api/users";
import {captchaTC} from "../../../../entities/model/actions/security";
import {sessionAPI, setAuthUserDataTC} from "../../../../entities/session";


export const loginTC = (loginData) => (dispatch) => {
    sessionAPI.login(loginData)
        .then(resp => {
            if(resp.resultCode === 0) {
                dispatch(setAuthUserDataTC());
                dispatch(getFriendsTC());
            }
            else {
                if(resp.resultCode === 10) {
                    dispatch(captchaTC())
                }
                const messages = resp.messages.length > 0 ? resp.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: messages}));
            }

        })
}

