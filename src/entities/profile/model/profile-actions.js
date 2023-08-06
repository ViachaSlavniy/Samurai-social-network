import { ADD_POST, CHANGE_POST_TEXT, SET_PROFILE, SET_FETCH, SET_EDIT_MODE } from '../../model/actions/types';
import {profileAPI} from '../../../shared/api/api';
import {stopSubmit} from 'redux-form';
import {setAuthUserInfoAC} from "../../session";


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

export const getProfileForAuthTC = (id) => (dispatch) => {
    return profileAPI.getProfile(id)
        .then((data) => {
            dispatch(setAuthUserInfoAC(data.fullName, data.photos.large))
        })
}

export const getProfileTC = (id) => (dispatch) => {
    return profileAPI.getProfile(id)
        .then((data) => {
            dispatch(setFetchingAC(false))
            dispatch(setProfileAC(data))
            dispatch(setFetchingAC(true)) 
        })
}

export const setProfileInfoTC = (obj, userId) => (dispatch) => {
    return profileAPI.setProfileInfo(obj)
            .then((resp) => {
                dispatch(getProfileTC(userId))
                if(resp.resultCode === 1) {
                    const message = resp.messages.length > 0 ? resp.messages[0] : 'Some error';
                    dispatch(stopSubmit('about', {_error: message}))
                }
            })
}

