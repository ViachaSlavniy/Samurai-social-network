
const ADD_POST = 'ADD_POST';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


const initialState = {
    postsData: [],
    comments:[]
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
            case FOLLOW: {
    
            }
            case UNFOLLOW: {
                
            }
            default: return state
        }
}

export default profileReducer;