import {ADD_POST, CHANGE_POST_TEXT} from "../../app";

export const addPostAC = (post: string) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const postChangeAC = (postText: string) => {
    return {
        type: CHANGE_POST_TEXT,
        payload: postText
    }
}
