import {appActionCreators} from "./slice";
import {setAuthUserDataTC} from "../../session/@x/app";

export const initializeApp = () => async (dispatch: any) => {
    try {
        await dispatch(setAuthUserDataTC());
        dispatch(appActionCreators.setInitializeApp())
    } catch (error) {}
}
