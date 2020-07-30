import React from "react"
import {Link} from "react-router-dom"
import { signup } from "../../util/session_api_util";


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
        this.handleAlternate = this.handleAlternate.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(this.props.closeModal);
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

    signUp() {
        return(
            <div>
                <label>First Name:</label>
                <input type="text" value={this.state.fname} onChange={this.update("fname")} />
                <br/>
                <label>Last Name:</label>
                <input type="text" value={this.state.lname} onChange={this.update("lname")} />
                <br/> 
            </div>
        )
    }

    guest() {
        return(
            <input type="submit" value="Sign in As Guest" onClick={this.props.testUser} />
        )
    }

    auth() {
        return (
            <div>
                <br />
                { this.renderErrors() }
                <header className="form-header"><h3 className="form-title">{this.props.formType}</h3></header>
                <br />
                <label>Email:</label>
                <input type="text" value={this.state.email} onChange={this.update("email")} />
                <br />
                <label>Password:</label>
                <input type="password" value={this.state.password} onChange={this.update("password")} />
                <br />
            </div>
        )
    }

    handleAlternate() {
        this.props.otherForm()
    }



    render() {
        return(
            <div className="form-container">
                <form className={this.props.className} onSubmit={this.handleSubmit}>
                    {this.auth()}
                    {(this.props.formType === "Sign Up") ? this.signUp() : this.guest()}
                    <br/>
                    <input type="submit" value={this.props.formType} />
                    <br/> <p>OR</p>
                    <br/>
                    {(this.props.formType === "Sign Up") ? <p>Already have an account? </p> : <p>Don’t have an account? </p> }
                    <button type="button" onClick={this.handleAlternate}>
                        {this.props.formType === "Sign Up" ? <p>Log in</p> : <p>Sign Up</p>}
                    </button>
                </form>
            </div>
        )
    }
}

export default SessionForm;