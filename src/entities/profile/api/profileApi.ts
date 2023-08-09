import {instance} from "../../../shared/api";
import {IProfile} from "../model/types";
import {ProfileApi} from "./types";

export const profileAPI: ProfileApi = {
    getProfile(userId: number){
        return instance.get(`/profile/${userId}`)
            .then((resp) => resp.data);
    },
    setProfileInfo(profile: IProfile){
        return instance.put(`/profile`, profile)
            .then((resp) => resp.data);
    }
}
