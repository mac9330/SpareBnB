import React from "react"
import {Link} from "react-router-dom"

class Greeting extends React.Component {
    constructor(props) {
        super(props)

    }

    welcome() {
        return (
            <div>
                <h1>Hello, {currentUser.fname} {currentUser.lname}</h1>
                <button onClick={() => logout()}></button>
            </div>
        )
    }

    signIn() {
        return (
            <div>
                <Link to={`/login`}>Login</Link>
                <Link to={`/signup`}>Create Account</Link>
            </div>
        );
    }
        



    render() {
        const {currentUser, logout} = this.props;

        return currentUser ? this.welcome() : this.signIn();
    }
}

export default Greeting;