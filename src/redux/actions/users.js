import {SET_USERS, FOLLOW, UNFOLLOW, SET_LOAD, SET_CURRENT_PAGE, SEARCH_USERS, SET_FRIENDS} from './types';
import { usersAPI } from '../../api/api';


// ACTION CREATORS

export const setUsersAC = (obj) => {
    return {
        type: SET_USERS,
        payload: obj
    }
}

export const setFriendsAC = (obj) => {
    return {
        type: SET_FRIENDS,
        payload: obj
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        payload: userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        payload: userId
    }
}

export const setLoadAC = (boolean) => {
    return {
        type: SET_LOAD,
        payload: boolean
    }
}

export const setCurrentPageAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}

export const searchAC = (obj) => {
    return {
        type: SEARCH_USERS,
        payload: obj
    }
}

// THUNK CREATORS

export const getUsersTC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setLoadAC(false))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsersAC(data))
    dispatch(setLoadAC(true))
}

export const getFriendsTC = (currentPage = 1, pageSize = 10) => async (dispatch) => {
    dispatch(setLoadAC(false))
    const data = await usersAPI.getFriends(currentPage, pageSize)
    dispatch(setFriendsAC(data))
    dispatch(setLoadAC(true))
}

export const followTC = (userId) => async (dispatch) => {
    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(followAC(userId));
    }
}

export const unfollowTC = (userId) => async (dispatch) => {
    const data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowAC(userId));
    }
}

export const searchTC = (userName) => async (dispatch) => {
    const data = await usersAPI.searchUser(userName)
    dispatch(searchAC(data));
}