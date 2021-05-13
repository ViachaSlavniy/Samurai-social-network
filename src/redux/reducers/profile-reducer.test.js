import {addPostAC} from "../actions/profile";
import profileReducer from './profile-reducer';


test('post must be added', () => {
    const action = addPostAC('new post');
    const state = {
        profilePage: null,
        postText: '',
        postsData: [
            {id: 1, postText: 'Hello my potential employer :)', likesCount: 100}
        ],
        isFetching: false,
        editMode: false
    }
    const newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
})