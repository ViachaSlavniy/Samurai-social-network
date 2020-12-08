import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': 'deb5a1cf-eef7-4206-9237-48ed86537d51'}
})


export const securityAPI = {
    getCaptcha(){
        return instance.get(`/security/get-captcha-url`)
            .then(resp => resp.data);
    }
}

export const authAPI = {
    authMe(){
        return instance.get(`/auth/me`)
            .then((resp) => resp.data);
    },
    login(logindata){
        return instance.post(`/auth/login`, logindata)
            .then((resp) => resp.data);
    },
    logout(){
        return instance.delete(`/auth/login`)
            .then((resp) => resp.data);
    },
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
            .then((resp) => resp.data);
    },
    setProfileInfo(profile){
        return instance.put(`/profile`, profile)
            .then((resp) => resp.data);
    }
}

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

