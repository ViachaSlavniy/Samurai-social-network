import {INITIALIZE_APP} from '../actions/types'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
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