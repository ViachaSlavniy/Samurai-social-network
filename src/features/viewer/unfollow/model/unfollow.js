import {UNFOLLOW} from "../../../../entities/model/actions/types";
import {usersAPI} from "../../../../entities/viewer/api/users";

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
