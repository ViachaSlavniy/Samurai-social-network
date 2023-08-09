import {AuthInitialState} from "./types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: AuthInitialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null,
    captcha: null,
    userPhotoURL: null,
    userName: null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuthUserData: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.login = action.payload.login;
            state.isAuth = true;
        },
        setUserInfo: (state, action) => {
            state.userName = action.payload.userName
            state.userPhotoURL = action.payload.userPhotoURL
        },
        setCaptcha: (state, action) => {
            state.captcha = action.payload
        },
        logout: () => {
            return initialState;
        }
    }
})

export const authReducer = authSlice.reducer;
export const {
    setAuthUserData,
    logout,
    setUserInfo,
    setCaptcha
} = authSlice.actions;




