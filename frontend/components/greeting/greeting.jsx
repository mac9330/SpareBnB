import React from "react"
import {Link} from "react-router-dom"
import Dropdown from "./dropdown"
import { Icon, InlineIcon } from '@iconify/react';
import airbnbIcon from '@iconify/icons-fa-brands/airbnb';
import UserDropdown from "./user_dropdown"

class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    welcome() {
        return (
            <div className="welcome-div">
                <Link to="/" ><InlineIcon icon={airbnbIcon} className="logo" /></Link>
                <UserDropdown currentUser={this.props.currentUser} logout={this.props.logout} />
            </div>
        )
    }

    signIn() {
        return (
            <div className="sign-in-div">
            <Link to="/" ><InlineIcon icon={airbnbIcon} className="logo" /></Link>
                <Dropdown openModal={this.props.openModal}/>
            </div>
        );
    }


        



    render() {
        const {currentUser} = this.props;

        return currentUser ? this.welcome() : this.signIn();
    }
}

export default Greeting;