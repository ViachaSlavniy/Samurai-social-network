import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import ProfileWithRouter from "../components/Profile/Profile";
import {UsersPage} from "../pages/UsersPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {FriendsPage} from "../pages/FriendsPage";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path="/profile/:userId?" render={() => <ProfileWithRouter/>}/>
            <Route path="/friends" render={() => <FriendsPage/>}/>
            <Route path="/users" render={() => <UsersPage/>}/>
            <Route path="/login" render={() => <LoginPage/>}/>
            <Redirect from="/" to="/profile"/>
        </Switch>
    );
};
