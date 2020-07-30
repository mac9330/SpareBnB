import React from "react"
import { connect } from "react-redux"

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

        this.setState({
            dropDown: true,
        }, () => {
            document.addEventListener("click", this.closeMenu);
        })
    }

    loginForm() {
        this.props.openModal("Login");
    }

    signupForm() {
        this.props.openModal("Sign Up");
    }

    closeMenu(event) {
        this.setState({ dropDown: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    
    showDropdown() {
        return(
            <div className="auth-dropdown"
                ref={(dropdown) => { this.dropdownMenu = dropdown; }}>

                <button onClick={this.loginForm}>Log In </button>
                <button onClick={this.signupForm}>Sign Up </button>
            </div>
        )
    }

    render() {
        return(
            <div>
                <button onClick={this.dropDown}>
                    Display Dropdown
                </button>
                {this.state.dropDown ? this.showDropdown() : null}
            </div>
        );
    }
}


export default Dropdown;