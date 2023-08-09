import {instance} from "../../../shared/api";
import {SessionApi} from "./types";

export const sessionAPI: SessionApi = {
    authMe(){
        return instance.get(`/auth/me`)
            .then((resp) => resp.data);
    },
    login(loginData: any){
        return instance.post(`/auth/login`, loginData)
            .then((resp) => resp.data);
    },
    logout(){
        return instance.delete(`/auth/login`)
            .then((resp) => resp.data);
    },
}
