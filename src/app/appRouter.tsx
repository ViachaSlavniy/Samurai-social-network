import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {UsersPage} from "../pages/UsersPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {FriendsPage} from "../pages/FriendsPage";
import {ProfilePageWithRouter} from "../pages/ProfilePage/ProfilePage";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path="/profile/:userId?" render={() => <ProfilePageWithRouter/>}/>
            <Route path="/friends" render={() => <FriendsPage/>}/>
            <Route path="/users" render={() => <UsersPage/>}/>
            <Route path="/login" render={() => <LoginPage/>}/>
            <Redirect from="/" to="/profile"/>
        </Switch>
    );
};
