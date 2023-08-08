import axios from 'axios';

export const instance = axios.create({
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

