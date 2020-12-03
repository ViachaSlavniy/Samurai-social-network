import { ADD_POST, CHANGE_POST_TEXT, SET_PROFILE, SET_FETCH, SET_EDIT_MODE } from './types';
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

export const setEditModeAC = (boolean) => {
    return {
        type: SET_EDIT_MODE,
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

export const setProfileInfoTC = (obj) => (dispatch) => {
    profileAPI.setProfileInfo(obj).then((data) => {
        console.log(data, 'THUNK SUCSESS')
    })
}

