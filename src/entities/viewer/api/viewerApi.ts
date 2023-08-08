import {SET_USERS, SET_LOAD, SET_CURRENT_PAGE, SET_FRIENDS} from '../../app';
import {instance} from '../../../shared/api';
import {GetUsersDto, ViewerApi} from "./types";


export const viewerAPI: ViewerApi = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then((resp) => resp.data);
    },
    getFriends(currentPage: number, pageSize: number){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}&friend=${true}`)
            .then((resp) => resp.data);
    },
    searchUser(userName: string){
        return instance.get(`/users?term=${userName}`)
            .then((resp) => resp.data)
    },
    follow(userId: number){
        return instance.post(`/follow/${userId}`)
            .then((resp) => resp.data);
    },
    unfollow(userId: number){
        return instance.delete(`/follow/${userId}`)
            .then((resp) => resp.data);
    }
}

// ACTION CREATORS

export const setUsersAC = (users: GetUsersDto) => {
    return {
        type: SET_USERS,
        payload: users
    }
}

export const setFriendsAC = (users: GetUsersDto) => {
    return {
        type: SET_FRIENDS,
        payload: users
    }
}


export const setLoadAC = (isLoaded: boolean) => {
    return {
        type: SET_LOAD,
        payload: isLoaded
    }
}

export const setCurrentPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    try {
        const response = await viewerAPI.getUsers(currentPage, pageSize)
        dispatch(setLoadAC(false))
        dispatch(setUsersAC(response))
        dispatch(setLoadAC(true))
    } catch (error) {}
}

export const getFriendsTC = (currentPage = 1, pageSize = 10) => async (dispatch: any) => {
    try {
        const response = await viewerAPI.getFriends(currentPage, pageSize)
        dispatch(setLoadAC(false))
        dispatch(setFriendsAC(response))
        dispatch(setLoadAC(true))
    } catch (error) {}
}



