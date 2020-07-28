import React from "react"
import {Link} from "react-router-dom"

class SessionForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
    }



    render() {

        return (

        )
    }


}