import {UNFOLLOW} from "../../../../entities/app";
import {usersAPI} from "../../../../entities/viewer";

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        payload: userId
    }
}

export const unfollowTC = (userId) => (dispatch) => {
    usersAPI.unfollow(userId)
        .then((resp) => {
            if(resp.resultCode === 0) {
                dispatch(unfollowAC(userId));
            }
        })
}
