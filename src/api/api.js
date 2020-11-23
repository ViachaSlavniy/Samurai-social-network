import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {'API-KEY': 'deb5a1cf-eef7-4206-9237-48ed86537d51'}
})

const followRequest = (userId) => {
    const response = instance.get(`/follow/${userId}`);

    console.log(response);
}

