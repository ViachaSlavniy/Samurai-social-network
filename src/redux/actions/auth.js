import {authAPI} from './../../api/api'
import {AUTH_ME, LOG_OUT} from './types'



export const authMeAC = (obj) => {
    return {
        type: AUTH_ME,
        payload: obj
    }
}

// export const loginAC = (userId) => {
//     return {
//         type: LOGIN,
//         payload: userId
//     }
// }

export const logOutAC = () => {
    return {
        type: LOG_OUT
    }
}


//THUNKCREATOR

export const authMeTC = () => (dispatch) => {
    authAPI.authMe()
        .then(resp => {
            if(resp.resultCode === 0) {
                dispatch(authMeAC(resp.data))
            }
        })
}

export const loginTC = (loginData) => (dispatch) => {
    authAPI.login(loginData)
        .then(resp => {
            if(resp.resultCode === 0){
                dispatch(authMeTC())
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