import {usersAPI} from "../../../../entities/viewer";
import {FOLLOW} from "../../../../entities/app";

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
