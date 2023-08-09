import {IProfile} from "../model/types";

type Response = {
    resultCode: number;
    messages: string[];
    data: {}
}

export type ProfileApi = {
    getProfile: (userId: number) => Promise<IProfile>,
    setProfileInfo: (profile: IProfile) => Promise<Response>,
}
