import {usersAPI} from "../../../shared/api/api";
import {SEARCH_USERS} from "../../../entities/model/actions/types";

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
