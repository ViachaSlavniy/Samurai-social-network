import {INITIALIZE_APP} from './types';
import {setAuthUserDataTC} from './auth'


const initializeAppAC = () => {
    return {
        type: INITIALIZE_APP
    }
}

//THUNK CREATORS

export const initializeApp = () => async (dispatch) => {
    let promise = await dispatch(setAuthUserDataTC());
    //dispatch(somethings)
    await Promise.all([promise])
    dispatch(initializeAppAC())
}