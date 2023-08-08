import {SET_CAPTCHA} from '../../app';
import {securityAPI} from '../../../shared/api/api';


export const setCaptchaAC = (url) => {
    return {
        type: SET_CAPTCHA,
        payload: url
    }
}

export const captchaTC = () => (dispatch) => {
    securityAPI.getCaptcha()
        .then(resp => {
            dispatch(setCaptchaAC(resp.url))
        })
}
