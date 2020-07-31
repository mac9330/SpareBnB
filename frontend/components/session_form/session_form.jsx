import React from "react"
// import {Link} from "react-router-dom"


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
        this.handleGuest = this.handleGuest.bind(this);
        this.submitted = false;
    }


    handleSubmit(e) {
        e.preventDefault();
        this.submitted = true;
        const user = Object.assign({}, this.state);
        this.props.action(user).then(this.props.closeModal);
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
                <input className={this.state.fname.length < 1 && this.submitted ? "auth-input" : null} type="password" type="text" value={this.state.fname} onChange={this.update("fname")} />
                <br/>
                <label>Last Name:</label>
                <input className={this.state.lname.length < 1 && this.submitted ? "auth-input" : null} type="password" type="text" value={this.state.lname} onChange={this.update("lname")} />
                <br/> 
            </div>
        )
    }

    handleGuest(e) {
        e.preventDefault();
        this.props.action({ email: "myoung4@binghamton.edu", password: "123456" }).then(this.props.closeModal);
    }

    guest() {
        return(
            <button className="guest-signin" onClick={this.handleGuest}>Sign in As Guest</button>
        )
    }

    auth() {
        return (
            <div>
                <br />
                <header className="form-header"><h3 className="form-title">{this.props.formType}</h3></header>
                <br />
                {this.renderErrors()}
                <br/>
                <label>Email:</label>
                <input className={this.state.email.length < 1 && this.submitted ? "auth-input" : null} type="password" value={this.state.email} onChange={this.update("email")} />
                <br />
                <label>Password:</label>
                <input className={this.state.password.length < 6 && this.submitted ? "auth-input" : null} type="password" value={this.state.password} onChange={this.update("password")} />
                <br />
            </div>
        )
    }

    handleAlternate(e) {
        e.preventDefault();
        this.props.otherForm();
    }



    render() {
        return(
            <div className="form-container" onSubmit={this.handleSubmit}>
                <form className={this.props.className}>
                    {this.auth()}
                    <br/>
                    {(this.props.formType === "Sign Up") ? this.signUp() : null}
                    <br/>
                    <input type="submit" value={this.props.formType} />

                    {(this.props.formType === "Sign Up") ? null : <p className="form-or"> <br/>OR</p>}
                    {(this.props.formType === "Sign Up") ? null : <br/>}
                    {(this.props.formType === "Sign Up") ? null : this.guest()}
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