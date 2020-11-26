import {SET_USERS, FOLLOW, UNFOLLOW, SET_LOAD, SET_CURRENT_PAGE} from './types'


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