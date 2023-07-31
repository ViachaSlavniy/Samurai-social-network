import {INITIALIZE_APP} from './types';
import {setAuthUserDataTC} from './auth'


const initializeAppAC = () => {
    return {
        type: INITIALIZE_APP
    }
}


//THUNK CREATORS

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUserDataTC());
    //dispatch(somethings)
    Promise.all([promise])
        .then(() => {
            dispatch(initializeAppAC())
        })
}