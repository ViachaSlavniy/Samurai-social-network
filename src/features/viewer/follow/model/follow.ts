import {viewerAPI} from "../../../../entities/viewer";
import {FOLLOW} from "../../../../entities/app";

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: userId
    }
}

export const followTC = (userId: number) => (dispatch: any) => {
    viewerAPI.follow(userId)
        .then((resp) => {
            if(resp.resultCode === 0) {
                dispatch(followAC(userId));
            }
        })
}
