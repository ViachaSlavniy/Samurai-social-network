import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import ProfileWithRouter from "../components/Profile/Profile";
import Messages from "../components/Messages/Messages";
import Newsfeed from "../components/News/News";
import {Login} from "../features/authentification/login";
import {UsersPage} from "../pages/UsersPage";
import {FriendsPage} from "../pages/FriendsPage/FriendsPage";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path="/profile/:userId?" render={() => <ProfileWithRouter/>}/>
            <Route path="/messages" render={() => <Messages/>}/>
            <Route path="/news" render={() => <Newsfeed/>}/>
            <Route path="/friends" render={() => <FriendsPage/>}/>
            <Route path="/users" render={() => <UsersPage/>}/>
            <Route path="/login" render={() => <Login/>}/>
            <Redirect from="/" to="/profile"/>
        </Switch>
    );
};
