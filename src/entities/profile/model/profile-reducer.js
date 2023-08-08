import { ADD_POST, CHANGE_POST_TEXT, SET_PROFILE, SET_FETCH, SET_EDIT_MODE } from '../../app';


const initialState = {
    profilePage: null,
    postText: '',
    postsData: [
        {id: 1, postText: 'Hello my potential employer :)', likesCount: 100}
    ],
    isFetching: false,
    editMode: false
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
            case SET_EDIT_MODE: {
                return {
                    ...state,
                    editMode: action.payload
                }
            }

            default: return state
        }
}

export default profileReducer;




