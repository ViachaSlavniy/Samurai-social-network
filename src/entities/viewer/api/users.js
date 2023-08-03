import {SET_USERS, FOLLOW, UNFOLLOW, SET_LOAD, SET_CURRENT_PAGE, SET_FRIENDS} from '../../model/actions/types';
import {instance} from '../../../shared/api/api';


export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then((resp) => resp.data);
    },
    getFriends(currentPage, pageSize, friendsBool = true){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}&friend=${friendsBool}`)
            .then((resp) => resp.data);
    },
    searchUser(userName){
        return instance.get(`/users?term=${userName}`)
            .then((resp) => resp.data)
    },
    follow(userId){
        return instance.post(`/follow/${userId}`)
            .then((resp) => resp.data);
    },
    unfollow(userId){
        return instance.delete(`/follow/${userId}`)
            .then((resp) => resp.data);
    }
}

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

// THUNK CREATORS

export const getUsersTC = (currentPage, pageSize) => (dispatch) => {
    usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setLoadAC(false))
                dispatch(setUsersAC(data))
                dispatch(setLoadAC(true))
            })
}

export const getFriendsTC = (currentPage = 1, pageSize = 10) => (dispatch) => {
    usersAPI.getFriends(currentPage, pageSize)
        .then((data) => {
            dispatch(setLoadAC(false))
            dispatch(setFriendsAC(data))
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

