import { ADD_POST, CHANGE_POST_TEXT, SET_PROFILE, SET_FETCH } from './../actions/types'

const initialState = {
    profilePage: null,
    postText: '',
    postsData: [],
    isFetching: false
}

const profileReducer = (state = initialState, action) => {
        switch(action.type) {
            case ADD_POST: {
    
                const newPost = {id: state.postsData.length + 1, postText: action.payload, likesCount: 0}
    
                return {
                    ...state,
                    postsData: [...state.postsData, newPost] 
                }
            }

            case CHANGE_POST_TEXT: {
    
                return {
                    ...state,
                    postText: action.payload 
                }
            }

            case SET_PROFILE: {
    
                return {
                    ...state,
                    profilePage: {
                        ...action.payload
                    }
                }
            }
            case SET_FETCH: {
    
                return {
                    ...state,
                    isFetching: action.payload
                }
            }

            default: return state
        }
}

export default profileReducer;