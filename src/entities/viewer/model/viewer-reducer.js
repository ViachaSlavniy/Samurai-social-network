import {SET_USERS, FOLLOW, UNFOLLOW, SET_LOAD, SET_CURRENT_PAGE, SEARCH_USERS, SET_FRIENDS} from '../../model/actions/types'

const initialState = {
    items: [],
    isLoaded: false,
    totalCount: null,
    error: null,
    currentPage: 1,
    pageSize: 10,
    portionSize: 10,
    searchResult: {
        items:[],
        totalCount: null
    },
    friends: {
        items: [],
        totalCount: 0,
    }
}

export const viewerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_FRIENDS: {
            return {
                ...state,
                friends: {...action.payload}
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

        case SEARCH_USERS: {
            return {
                ...state,
                searchResult: {
                    ...action.payload
                }
            }
        }

        default: return state
    }
}



