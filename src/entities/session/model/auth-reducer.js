import {INITIALIZE_APP, SET_AUTH_USER_DATA, SET_CAPTCHA, SET_USER_INFO} from '../../model/actions/types';
import {LOG_OUT} from "../../../features/authentification/logout";
import {sessionAPI} from "../api/sessionApi";
import {getProfileForAuthTC} from "../../model/actions/profile";

const initialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null,
    captcha: null,
    userPhotoURL: null,
    userName: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                login: action.payload.login,
                isAuth: true
            }
        }

        case SET_USER_INFO: {
            return {
                ...state,
                userName: action.userName,
                userPhotoURL: action.userPhotoURL
            }
        }

        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.payload
            }
        }

        case LOG_OUT: {
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false
            }
        }

        default: return state
    }
}

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

export const setAuthUserDataTC = () => (dispatch) => {
    return sessionAPI.authMe()
        .then(resp => {
            if(resp.resultCode === 0) {
                const userId = resp.data.id;
                dispatch(getProfileForAuthTC(userId));
                dispatch(setAuthUserDataAC(resp.data));
            }
        })
}

const initializeAppAC = () => {
    return {
        type: INITIALIZE_APP
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUserDataTC());
    Promise.all([promise])
        .then(() => {
            dispatch(initializeAppAC())
        })
}