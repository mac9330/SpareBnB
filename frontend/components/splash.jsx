import React from "react"
import GreetingContainer from './greeting/greeting_container';
import Modal from "../components/modal/modal_container"

export default () => (
    <div>
        <aside className="covid-banner"><a href={`https://www.airbnb.com/covid-traveler`}>Get the latest on our COVID-19 response</a></aside>
        <header className="header">
            <Modal className="modal" />
            <GreetingContainer />
        </header>
    </div>
)