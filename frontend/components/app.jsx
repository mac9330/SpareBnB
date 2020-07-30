import React from "react";
import GreetingContainer from './greeting/greeting_container';
import Modal from "../components/modal/modal_container"

import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

export default () => (
    <div>
        <aside className="covid-banner"><a href={`https://www.airbnb.com/covid-traveler`}>Get the latest on our COVID-19 response</a></aside>
        <header className="header">
            <Link to="/" ><span className="iconify" data-icon="fa-brands:airbnb" data-inline="false"></span></Link>
        <Modal className="modal"/>
            <GreetingContainer />
            <Switch>

            </Switch>
        </header>
    </div>
);
