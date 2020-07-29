import React from "react";
import GreetingContainer from './greeting/greeting_container';
import Modal from "../components/modal/modal_container"

// import LoginFormContainer from "./session_form/login_form_container";
// import SignupFormContainer from "./session_form/signup_form_container";

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import modal from "./modal/modal_container";

export default () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
            <h1>Spare BnB</h1>
            </Link>
            <GreetingContainer />
            <Switch>

            </Switch>
        </header>
    </div>
);
