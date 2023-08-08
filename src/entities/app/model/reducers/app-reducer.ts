import {INITIALIZE_APP} from '../actions/types'
import {AnyAction} from "redux";

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: AnyAction) => {
    switch(action.type) {

        case INITIALIZE_APP: {
            return {
                initialize: true
            }
        }

        default: return state
    }
}

export default appReducer;
