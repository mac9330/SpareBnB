import React from "react"
import GreetingContainer from './greeting/greeting_container';
import Modal from "./modal/modal_container"

class Header extends React.Component {


    homeAside() {
        return this.props.match.isExact ? <aside className="covid-banner"><a href={`https://www.airbnb.com/covid-traveler`}>Get the latest on our COVID-19 response</a></aside> : null
    }

render () {
    return(
        <div>
            {this.homeAside()}
            <header className={this.props.match.isExact ? "home-header" : "header"}>
                <Modal className="modal" />
                <GreetingContainer />
            </header>
        </div>

    )

    }
}

export default Header;
