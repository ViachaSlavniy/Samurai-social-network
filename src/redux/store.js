import { combineReducers, createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import profile from './reducers/profile-reducer';
import users from './reducers/users-reducer';
import messages from './reducers/messages-reducer';
import auth from './reducers/auth-reducer';
import app from './reducers/app-reducer';

const reducers = combineReducers({
    app,
    profile,
    users,
    messages,
    auth,
    form: formReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(compose(applyMiddleware(thunk))));

export default store;