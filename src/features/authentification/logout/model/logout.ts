import {Dispatch} from "redux";
import {sessionAPI} from "../../../../entities/session";
import {LOG_OUT} from "../../../../entities/session/model/types";



const logOutAC = () => {
    return {
        type: LOG_OUT
    }
}

export const logOutTC = () => (dispatch: Dispatch) => {
    sessionAPI.logout()
        .then(resp => {
            if(resp.resultCode === 0) {
                dispatch(logOutAC())
            }
        })
}