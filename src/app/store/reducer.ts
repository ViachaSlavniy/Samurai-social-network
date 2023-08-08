import { combineReducers } from "@reduxjs/toolkit";
import {viewerReducer} from "../../entities/viewer";
import {authReducer} from "../../entities/session";
import {profileReducer} from "../../entities/profile";
import {appReducer} from "../../entities/app";
import {postReducer} from "../../entities/post";
import {default as formReducer} from "redux-form/lib/reducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    profile: profileReducer,
    post: postReducer,
    viewer: viewerReducer,
    form: formReducer
});


