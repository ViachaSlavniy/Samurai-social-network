import { combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer'

const reducers = combineReducers({
    profile: profileReducer,
    users: usersReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;