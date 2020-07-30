import React from "react"
import {Link} from "react-router-dom"
import Dropdown from "./dropdown"

class Greeting extends React.Component {
    constructor(props) {
        super(props)

    }

    welcome() {
        return (
            <div>
                <h1>Hello, {this.props.currentUser.fname} {this.props.currentUser.lname}</h1>
                <button onClick={() => this.props.logout()}>log out</button>
            </div>
        )
    }

    signIn() {
        return (
            <div>
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