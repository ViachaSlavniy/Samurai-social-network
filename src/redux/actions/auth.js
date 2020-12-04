import {authAPI} from './../../api/api';
import {SET_AUTH_USER_DATA, LOG_OUT} from './types';



export const setAuthUserDataAC = (obj) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: obj
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
                dispatch(setAuthUserDataAC(resp.data))
            }
        })
}

export const loginTC = (loginData) => (dispatch) => {
    authAPI.login(loginData)
        .then(resp => {
            if(resp.resultCode === 0){
                dispatch(setAuthUserDataTC())
            } 
            // else if (resp.resultCode === 1) {
            //     console.log(resp.messages)
            // }
            
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