import {INITIALIZE_APP} from '../actions/types'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {

        case INITIALIZE_APP: {
            return {
                initialized: true
            }
        }

        default: return state
    }
}

export default appReducer;

// Types

type InitialStateType = typeof initialState;