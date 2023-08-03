import {instance} from "../../../shared/api/api";

export const sessionAPI = {
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