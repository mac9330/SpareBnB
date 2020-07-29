import React from "react"
import {Link} from "react-router-dom"


// todo add error handling // add a link to opposite form action

class SessionForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            fname: "",
            lname: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
        // debugger;
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.session.map((err, i) => (
                <li key={i}>{err}</li>))}
            </ul>
        )
    }



    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Welcome to SpareBnB</h1>
                <br/>
                {this.renderErrors()}
                <h3>{this.props.formType}</h3>
                <br/>
                <label>Email:</label>
                <input type="text" value={this.state.email} onChange={this.update("email")}/>
                <br/>
                <label>Password:</label>
                <input type="password" value={this.state.password} onChange={this.update("password")}/>
                <br/>
                {this.props.formType === "Sign Up" ? 
                    <div>
                        <label>First Name:</label>
                        <input type="text" value={this.state.fname} onChange={this.update("fname")} />
                        <br />
                        <label>Last Name:</label>
                        <input type="text" value={this.state.lname} onChange={this.update("lname")} />
                        <br /> 
                    </div> : null }
                <input type="submit" value={this.props.formType} />
            </form>
        )
    }


}

export default SessionForm;