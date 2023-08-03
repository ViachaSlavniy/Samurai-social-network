import {Dispatch} from "redux";
import {sessionAPI} from "../../../../entities/session";

export const LOG_OUT = 'LOG_OUT';

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