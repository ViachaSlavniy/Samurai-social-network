import {SET_USERS, FOLLOW, UNFOLLOW, SET_LOAD, SET_CURRENT_PAGE} from './../actions/types'

const initialState = {
    items: [],
    isLoaded: false,
    totalCount: null,
    error: null,
    currentPage: 3,
    pageSize: 10,
    portionSize: 10
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case FOLLOW: {
            return {
                ...state,
                items: state.items.map(user => {
                    if(user.id === action.payload) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                items: state.items.map(user => {
                    if(user.id === action.payload) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }

        case SET_LOAD: {
            return {
                ...state,
                isLoaded: action.payload
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        default: return state
    }
}

export default usersReducer;



