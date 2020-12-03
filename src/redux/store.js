import { combineReducers, createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import profile from './reducers/profile-reducer';
import users from './reducers/users-reducer';
import messages from './reducers/messages-reducer';
import auth from './reducers/auth-reducer';

const reducers = combineReducers({
    profile,
    users,
    messages,
    auth,
    form: formReducer
})

const store = createStore(reducers, 
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;