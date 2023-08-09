import {getProfileForAuthTC} from "../../profile";
import {sessionAPI} from "../api/sessionApi";
import {setAuthUserData} from "./slice";

export const setAuthUserDataTC = () => async (dispatch: any) => {
    try {
        const {resultCode, data} = await sessionAPI.authMe();
        if(resultCode === 0) {
            const userId = data.id;
            dispatch(getProfileForAuthTC(userId));
            dispatch(setAuthUserData(data));
        }
    } catch (error) {}
}
