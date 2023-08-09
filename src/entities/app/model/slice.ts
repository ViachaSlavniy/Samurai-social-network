import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    initialized: false
}

export const appSlice = createSlice({
    name: "appReducer",
    initialState,
    reducers: {
        setInitializeApp: (state) => {
            state.initialized = true
        }
    }
})

export const appReducer = appSlice.reducer;
export const appActionCreators = appSlice.actions;
