import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': 'deb5a1cf-eef7-4206-9237-48ed86537d51'}
})


export const authAPI = {

}

export const profileAPI = {
    getProfile(userId){
        let promise = instance.get(`/profile/${userId}`)
        .then((resp) => resp.data);
        return promise
    }
}

export const usersAPI = {
    getUsers(currentPage, pageSize){
        let promise = instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then((resp) => resp.data);
        return promise
    },
    follow(userId){
        let promise = instance.post(`/follow/${userId}`)
        .then((resp) => resp.data);
        return promise
    },
    unfollow(userId){
        let promise = instance.delete(`/follow/${userId}`)
        .then((resp) => resp.data);
        return promise
    }
}

