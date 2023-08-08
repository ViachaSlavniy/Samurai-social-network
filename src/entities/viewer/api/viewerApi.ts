import {instance} from '../../../shared/api';
import {ViewerApi} from "./types";


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



