import React from "react"
import GreetingContainer from './greeting/greeting_container';
import Modal from "./modal/modal_container"

class Header extends React.Component {


    homeAside() {
        return <aside className="covid-banner"><a href={`https://www.airbnb.com/covid-traveler`}>Get the latest on our COVID-19 response</a></aside>
    }

render () {
    return(
        <div>
                {this.homeAside()}
            <header id="header" className="header">
                <Modal className="modal" />
                <GreetingContainer />
            </header>
            <div className="space-taker"></div>
        </div>

    )

    }
}

export default Header;
