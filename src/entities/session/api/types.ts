import {CommonResponse} from "../../../shared/api";


type AuthMeDto = CommonResponse & {
    data: {
        id: number;
        email: string;
        login: string;
    }
}

export type SessionApi = {
    authMe: () => Promise<AuthMeDto>,
    login: (loginData: any) => Promise<CommonResponse>,
    logout: () => Promise<CommonResponse>,
}

