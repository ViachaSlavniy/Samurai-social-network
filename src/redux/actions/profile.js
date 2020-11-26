import { ADD_POST, CHANGE_POST_TEXT, SET_PROFILE, SET_FETCH } from './types'


export const addPostAC = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const postChangeAC = (postText) => {
    return {
        type: CHANGE_POST_TEXT,
        payload: postText
    }
}

export const setProfileAC = (obj) => {
    return {
        type: SET_PROFILE,
        payload: obj
    }
}

export const setFetchingAC = (boolean) => {
    return {
        type: SET_FETCH,
        payload: boolean
    }
}