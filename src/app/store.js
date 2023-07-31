import { combineReducers, createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import profile from '../entities/model/reducers/profile-reducer';
import users from '../entities/model/reducers/users-reducer';
import messages from '../entities/model/reducers/messages-reducer';
import auth from '../entities/model/reducers/auth-reducer';
import app from '../entities/model/reducers/app-reducer';

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