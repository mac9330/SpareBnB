import React from "react"

class Dropdown extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dropDown: false,
        }
        this.dropDown = this.dropDown.bind(this);
        this.loginForm = this.loginForm.bind(this);
        this.signupForm = this.signupForm.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
    }

    dropDown(e) {
        e.preventDefault();

        this.setState({dropDown: true,}, () => {
            document.addEventListener("click", this.closeMenu);
        })
    }

    loginForm() {
        this.props.openModal("Login");
    }

    signupForm() {
        this.props.openModal("Sign Up");
    }

    closeMenu() {
        this.setState({ dropDown: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    
    showDropdown() {
        return(
            <div className="auth-dropdown">

                <button className="dropdown-btn" onClick={this.loginForm}>Log In </button>
                <button className="dropdown-btn" onClick={this.signupForm}>Sign Up </button>
            </div>
        )
    }

    render() {
        return(
            <div>
                <button className="auth-button" onClick={this.dropDown}>
                    <p><i className="fa fa-bars" aria-hidden="true"></i></p>
                    <p className="login-signup"><i className="fa fa-user-circle" aria-hidden="true"></i></p>
                </button>
                {this.state.dropDown ? this.showDropdown() : null}
            </div>
        );
    }
}


export default Dropdown;