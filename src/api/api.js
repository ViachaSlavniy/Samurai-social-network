import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': 'deb5a1cf-eef7-4206-9237-48ed86537d51'}
})

// const followRequest = (userId) => {
//     const response = instance.get(`/follow/${userId}`);

//     console.log(response);
// }

export const getProfile = (userId) => {
    instance.get(`/profile/${userId}`)
        .then((resp) => resp.data.data)
}

export const followUserRequest = (userId) => {
    instance.post(`/follow/${userId}`)
        .then((resp) => resp.resultCode);
}

export const unfollowUserRequest = (userId) => {
    instance.delete(`/follow/${userId}`)
        .then((resp) => resp.resultCode);
}

