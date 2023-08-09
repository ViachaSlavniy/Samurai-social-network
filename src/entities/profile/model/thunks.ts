import {stopSubmit} from 'redux-form';
import {setUserInfo} from "../../session";
import {profileAPI} from "../api/profileApi";
import {IProfile} from "./types";
import {setFetch, setProfile} from "./slice";

export const getProfileForAuthTC = (id: number) => async (dispatch: any) => {
    try {
        const {photos, fullName} = await profileAPI.getProfile(id);
        dispatch(setUserInfo({
            userName: fullName,
            userPhotoURL: photos.large
        }))
    } catch (error) {}
}

export const getProfileTC = (id: number) => async (dispatch: any) => {
    try {
        const profile = await profileAPI.getProfile(id)
        dispatch(setFetch(true))
        dispatch(setProfile(profile))
        dispatch(setFetch(false))

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

