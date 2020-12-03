import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': 'deb5a1cf-eef7-4206-9237-48ed86537d51'}
})


export const authAPI = {
    authMe(){
        let promise = instance.get(`/auth/me`)
        .then((resp) => resp.data);
        return promise
    },
    login(logindata){
        let promise = instance.post(`/auth/login`, logindata)
        .then((resp) => resp.data);
        return promise
    },
    logout(){
        let promise = instance.delete(`/auth/login`)
        .then((resp) => resp.data);
        return promise
    }
}

export const profileAPI = {
    getProfile(userId){
        let promise = instance.get(`/profile/${userId}`)
        .then((resp) => resp.data);
        return promise
    },
    setProfileInfo(profile){
        let promise = instance.put(`/profile`, profile)
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

