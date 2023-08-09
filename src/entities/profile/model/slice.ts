import {ProfileInitialState} from "./types";
import {createSlice} from "@reduxjs/toolkit";


const initialState: ProfileInitialState = {
    profilePage: null,
    isFetching: false,
    editMode: false
}

const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profilePage = {
                ...action.payload
            }
        },
        setFetch: (state, action) => {
            state.isFetching = action.payload
        },
        setEditMode: (state, action) => {
            state.editMode = action.payload
        },

    }
})

export const profileReducer = profileSlice.reducer;
export const {
    setProfile, setFetch, setEditMode,
} = profileSlice.actions;




