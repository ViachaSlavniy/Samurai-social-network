import {SET_AUTH_USER_DATA, LOG_OUT} from './../actions/types';

const initialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null
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

        // case LOGIN: {
        //     return {
        //         ...state,
        //         id: action.payload,
        //         isAuth: true
        //     }
        // }

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