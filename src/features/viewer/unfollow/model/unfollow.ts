import {UNFOLLOW} from "../../../../entities/app";
import {viewerAPI} from "../../../../entities/viewer";

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: userId
    }
}

export const unfollowTC = (userId: number) => (dispatch: any) => {
    viewerAPI.unfollow(userId)
        .then((resp) => {
            if(resp.resultCode === 0) {
                dispatch(unfollowAC(userId));
            }
        })
}
