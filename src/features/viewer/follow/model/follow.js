import {usersAPI} from "../../../../entities/viewer/api/users";
import {FOLLOW} from "../../../../entities/model/actions/types";

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        payload: userId
    }
}

export const followTC = (userId) => (dispatch) => {
    usersAPI.follow(userId)
        .then((resp) => {
            if(resp.resultCode === 0) {
                dispatch(followAC(userId));
            }
        })
}
