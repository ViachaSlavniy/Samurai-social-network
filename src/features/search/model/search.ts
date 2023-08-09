import {SEARCH_USERS} from "../../../entities/app";
import {viewerAPI} from "../../../entities/viewer";

export const searchAC = (obj: any) => {
    return {
        type: SEARCH_USERS,
        payload: obj
    }
}

export const searchTC = (userName: string) => (dispatch: any) => {
    viewerAPI.searchUser(userName)
        .then((resp) => {
            dispatch(searchAC(resp));
        })
}
