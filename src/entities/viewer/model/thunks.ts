import {viewerAPI} from "../api/viewerApi";
import {setFriends, setIsLoading, setUsers} from "./slice";

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    try {
        const response = await viewerAPI.getUsers(currentPage, pageSize)
        dispatch(setIsLoading(true))
        dispatch(setUsers(response))
        dispatch(setIsLoading(false))
    } catch (error) {}
}

export const getFriendsTC = (currentPage = 1, pageSize = 10) => async (dispatch: any) => {
    try {
        const response = await viewerAPI.getFriends(currentPage, pageSize)
        dispatch(setIsLoading(true))
        dispatch(setFriends(response))
        dispatch(setIsLoading(false))
    } catch (error) {}
}
