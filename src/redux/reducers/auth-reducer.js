import {AUTH_ME, LOGIN, LOG_OUT} from './../actions/types';

const initialState = {
    isAuth: false,
    id: null,
    // email: null,
    // login: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case AUTH_ME: {

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
                isAuth: false
            }
        }

        default: return state
    }
}

export default authReducer;