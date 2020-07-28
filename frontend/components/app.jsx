import React from "react";
import GreetingContainer from './greeting/greeting_container';

import LoginFormContainer from "./login_form_container"
import SignupFormContainer from "./signup_form_container"

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

export default () => (
    <header>
        <h1>Spare BnB</h1>
        <GreetingContainer />
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </header>
);
