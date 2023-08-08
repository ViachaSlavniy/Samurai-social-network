import {SEARCH_USERS} from "../../../entities/app";
import {usersAPI} from "../../../entities/viewer";

export const searchAC = (obj) => {
    return {
        type: SEARCH_USERS,
        payload: obj
    }
}

export const searchTC = (userName) => (dispatch) => {
    usersAPI.searchUser(userName)
        .then((resp) => {
            dispatch(searchAC(resp));
        })
}
