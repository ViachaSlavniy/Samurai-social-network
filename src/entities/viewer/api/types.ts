import {IUser} from "../model/types";
import {CommonResponse} from "../../../shared/api";

export type GetUsersDto = {
    items: IUser;
    totalCount: number;
    error: string;
}

export type ViewerApi = {
    getUsers: (currentPage: number, pageSize: number) => Promise<GetUsersDto>,
    getFriends: (currentPage: number, pageSize: number) => Promise<GetUsersDto>,
    searchUser: (userName: string) => Promise<GetUsersDto>,
    follow: (userId: number) => Promise<CommonResponse>,
    unfollow: (userId: number) => Promise<CommonResponse>,
}
