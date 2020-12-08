import {SET_AUTH_USER_DATA, LOG_OUT, SET_CAPTCHA, SET_USER_INFO} from './../actions/types';

const initialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null,
    captcha: null,
    userPhotoURL: null,
    userName: null
}

const authReducer = (state = initialState, action) => {
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

export default authReducer;