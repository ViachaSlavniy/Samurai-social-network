import {addPostAC, postChangeAC} from "../actions/profile";
import profileReducer from './profile-reducer';

let state;

beforeEach(() => {
    state = {
        profilePage: null,
        postText: '',
        postsData: [
            {id: 1, postText: 'Hello my potential employer :)', likesCount: 100}
        ],
        isFetching: false,
        editMode: false
    }
})



test('post must be added', () => {
    const action = addPostAC('new post');

    const newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
})

test('text of post must be changed', () => {
    const action = postChangeAC('new post text');

    const newState = profileReducer(state, action);
    expect(newState.postText.length).not.toEqual(state.postText.length);
})