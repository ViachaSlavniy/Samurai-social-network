import { SET_PROFILE, SET_FETCH, SET_EDIT_MODE } from '../../app';
import {stopSubmit} from 'redux-form';
import {setAuthUserInfoAC} from "../../session";
import {profileAPI} from "../api/profileApi";
import {IProfile} from "./types";


export const setProfileAC = (profile: IProfile) => {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}

export const setFetchingAC = (boolean: boolean) => {
    return {
        type: SET_FETCH,
        payload: boolean
    }
}

export const setEditModeAC = (boolean: boolean) => {
    return {
        type: SET_EDIT_MODE,
        payload: boolean
    }
}


export const getProfileForAuthTC = (id: number) => async (dispatch: any) => {
    try {
        const {photos, fullName} = await profileAPI.getProfile(id);
        dispatch(setAuthUserInfoAC(fullName, photos.large))
    } catch (error) {}
}

export const getProfileTC = (id: number) => async (dispatch: any) => {
    try {
        const profile = await profileAPI.getProfile(id)
        dispatch(setFetchingAC(true))
        dispatch(setProfileAC(profile))
        dispatch(setFetchingAC(false))

    } catch (error) {}
}

export const setProfileInfoTC = (profile: IProfile, userId: number) => async (dispatch: any) => {
    try {
        const {resultCode, messages} = await profileAPI.setProfileInfo(profile);
        dispatch(getProfileTC(userId))
        if(resultCode === 1) {
            const message = messages.length > 0 ? messages[0] : 'Some error';
            dispatch(stopSubmit('about', {_error: message}))
        }
    } catch (error) {}
}

