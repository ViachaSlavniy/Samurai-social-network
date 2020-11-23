const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    isLoaded: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: {
            return {
                ...action.payload
            }
        }
        case FOLLOW: {
            return state
        }

        case UNFOLLOW: {
            return state
        }

        
        
        default: return state
    }
}

export default usersReducer;