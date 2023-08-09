import {createSlice} from "@reduxjs/toolkit";
import {PostInitialState} from "./types";

const initialState: PostInitialState = {
    postText: '',
    postsData: [
        {id: 1, postText: 'Hello my potential employer :)', likesCount: 100}
    ],
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const newPost = {id: state.postsData.length + 1, postText: action.payload, likesCount: 0}
            state.postsData.push(newPost)
        },
        changePostText: (state, action) => {
            state.postText = action.payload;
        },
    }
})

export const postReducer = postSlice.reducer;
export const {
    addPost,
    changePostText
} = postSlice.actions;
