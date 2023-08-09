import {Dispatch} from "redux";
import {logout, sessionAPI} from "../../../../entities/session";


export const logOutTC = () => (dispatch: Dispatch) => {
    sessionAPI.logout()
        .then(resp => {
            if(resp.resultCode === 0) {
                dispatch(logout())
            }
        })
}
