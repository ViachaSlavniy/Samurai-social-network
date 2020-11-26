import { ADD_POST, CHANGE_POST_TEXT, SET_PROFILE, SET_FETCH } from './types';
import {profileAPI} from './../../api/api';


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

// THUNK CREATORS

export const getProfileTC = (id) => (dispatch) => {
    profileAPI.getProfile(id).then((data) => {
        dispatch(setFetchingAC(false))
        dispatch(setProfileAC(data))
        dispatch(setFetchingAC(true)) 
    })
}

