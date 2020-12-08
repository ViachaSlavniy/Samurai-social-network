import {authAPI} from './../../api/api';
import {captchaTC} from './security'
import {SET_AUTH_USER_DATA, LOG_OUT, SET_USER_INFO} from './types';
import {stopSubmit} from 'redux-form';
import { getProfileForAuthTC } from './profile';
import { getFriendsTC } from './users';



export const setAuthUserDataAC = (obj) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: obj
    }
}

export const setAuthUserInfoAC = (name, photoURL) => {
    return {
        type: SET_USER_INFO,
        userName: name,
        userPhotoURL: photoURL
    }
}

export const logOutAC = () => {
    return {
        type: LOG_OUT
    }
}




//THUNKCREATOR


export const setAuthUserDataTC = () => (dispatch) => {
    return authAPI.authMe()
        .then(resp => {
            if(resp.resultCode === 0) {
                const userId = resp.data.id;
                dispatch(getProfileForAuthTC(userId));
                dispatch(setAuthUserDataAC(resp.data));
            }
        })
}

export const loginTC = (loginData) => (dispatch) => {
    authAPI.login(loginData)
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

export const logOutTC = () => (dispatch) => {
    authAPI.logout()
        .then(resp => {
            if(resp.resultCode === 0) {
                dispatch(logOutAC())
            }
        })
}

