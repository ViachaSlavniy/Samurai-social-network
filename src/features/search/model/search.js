import {SEARCH_USERS} from "../../../entities/model/actions/types";
import {usersAPI} from "../../../entities/viewer/api/users";

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
