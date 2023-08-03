import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import ProfileWithRouter from "../components/Profile/Profile";
import Messages from "../components/Messages/Messages";
import Newsfeed from "../components/News/News";
import Friends from "../components/Friends/Friends";
import Users from "../components/Users/Users";
import {Login} from "../features/authentification/login";

export const AppRouter = () => {
    return (
        <Switch>
            <Route path="/profile/:userId?" render={() => <ProfileWithRouter/>}/>
            <Route path="/messages" render={() => <Messages/>}/>
            <Route path="/news" render={() => <Newsfeed/>}/>
            <Route path="/friends" render={() => <Friends/>}/>
            <Route path="/users" render={() => <Users/>}/>
            <Route path="/login" render={() => <Login/>}/>
            <Redirect from="/" to="/profile"/>
        </Switch>
    );
};
