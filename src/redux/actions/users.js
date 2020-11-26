import {SET_USERS, FOLLOW, UNFOLLOW, SET_LOAD, SET_CURRENT_PAGE} from './types';
import { usersAPI } from './../../api/api';


// ACTION CREATORS

export const setUsersAC = (obj) => {
    return {
        type: SET_USERS,
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

// THUNK CREATORS

export const getUsersTC = (currentPage, pageSize) => (dispatch) => {
    usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
        dispatch(setLoadAC(false))
        dispatch(setUsersAC(data))
        dispatch(setLoadAC(true))
    })
}

export const followTC = (userId) => (dispatch) => {
    usersAPI.follow(userId)
            .then((resp) => {
            if(resp.resultCode === 0) {
                dispatch(followAC(userId));
            }
    })
}

export const unfollowTC = (userId) => (dispatch) => {
    usersAPI.unfollow(userId)
            .then((resp) => {
            if(resp.resultCode === 0) {
                dispatch(unfollowAC(userId));
            }
    })
}