import {SET_CAPTCHA} from './types';
import {securityAPI} from '../../../shared/api/api';

//ACTION CREATORS

export const setCaptchaAC = (url) => {
    return {
        type: SET_CAPTCHA,
        payload: url
    }
}



//THUNK CREATORS

export const captchaTC = () => (dispatch) => {
    securityAPI.getCaptcha()
        .then(resp => {
            dispatch(setCaptchaAC(resp.url))
        })
}