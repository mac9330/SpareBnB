import React from "react"
import { connect } from "react-redux";
import {logout} from "../../actions/session_actions" 

class UserDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropDown: false,
        }
        this.dropDown = this.dropDown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.logoutForm = this.logoutForm.bind(this);
    }

    dropDown(e) {
        e.preventDefault();

        this.setState({ dropDown: true, }, () => {
            document.addEventListener("click", this.closeMenu);
        })
    }

    logoutForm(e) {
        this.props.logout();
    }

    closeMenu() {
        this.setState({ dropDown: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }


    showDropdown() {
        return (
            <div className="auth-dropdown"
                ref={(dropdown) => { this.dropdownMenu = dropdown; }}>

                <button className="dropdown-btn" onClick={this.logoutForm}>Log Out </button>
            </div>
        )
    }



    render() {
        return (
            <div>
                <button className="auth-button" onClick={this.dropDown}>
                    <p><i className="fa fa-bars" aria-hidden="true"></i></p>
                    <p><i class="fas fa-user-plus"></i></p>
                </button>
                {this.state.dropDown ? this.showDropdown() : null}
            </div>
        );
    }
}

const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
})


export default connect(null, mdp)(UserDropdown);
