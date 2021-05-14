import {followAC, unfollowAC} from '../actions/users';
import usersReducer from "./users-reducer";

let state;

beforeEach(() => {
    state = {
        items: [
            {id: 0, name: 'Edward', status: 'Followed false!', followed: false},
            {id: 1, name: 'Dimych', status: 'Hello world!', followed: false},
            {id: 2, name: 'Sasha', status: 'Followed true!', followed: true},
        ],
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
})

test('follow success', () => {
    const action = followAC(1);
    const newState = usersReducer(state, action);

    expect(newState.items[0].followed).toBeFalsy();
    expect(newState.items[1].followed).toBeTruthy();
})

test('unfollow success', () => {
    const action = unfollowAC(2);
    const newState = usersReducer(state, action);

    expect(newState.items[0].followed).toBeFalsy();
    expect(newState.items[2].followed).toBeFalsy();
})