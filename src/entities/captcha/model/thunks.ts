import {Dispatch} from "redux";
import {SET_CAPTCHA} from "../../app";
import {captchaAPI} from "../api/captchaApi";


export const setCaptchaAC = (url: string) => {
    return {
        type: SET_CAPTCHA,
        payload: url
    }
}

export const captchaTC = () => async (dispatch: Dispatch) => {
    try {
        const response  = await captchaAPI.getCaptcha()
        dispatch(setCaptchaAC(response.url))
    } catch (error) {}
}
