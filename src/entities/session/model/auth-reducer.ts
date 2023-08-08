import {INITIALIZE_APP, SET_AUTH_USER_DATA, SET_CAPTCHA, SET_USER_INFO} from '../../app';
import {AuthInitialState, LOG_OUT} from "./types";
import {getProfileForAuthTC} from "../../profile/@x/session";
import {sessionAPI} from "../api/sessionApi";
import {AnyAction} from "redux";

const initialState: AuthInitialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null,
    captcha: null,
    userPhotoURL: null,
    userName: null
}

export const authReducer = (state = initialState, action: AnyAction) => {
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

export const setAuthUserDataAC = (obj: any) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: obj
    }
}

export const setAuthUserInfoAC = (name: string, photoURL: string) => {
    return {
        type: SET_USER_INFO,
        userName: name,
        userPhotoURL: photoURL
    }
}

export const setAuthUserDataTC = () => async (dispatch: any) => {
    try {
        const {resultCode, data} = await sessionAPI.authMe();
        if(resultCode === 0) {
            const userId = data.id;
            dispatch(getProfileForAuthTC(userId));
            dispatch(setAuthUserDataAC(data));
        }
    } catch (error) {}
}

const initializeAppAC = () => {
    return {
        type: INITIALIZE_APP
    }
}

export const initializeApp = () => async (dispatch: any) => {
    try {
        let promise = dispatch(setAuthUserDataTC());
        Promise.all([promise])
            .then(() => {
                dispatch(initializeAppAC())
            })
    } catch (error) {}
}
