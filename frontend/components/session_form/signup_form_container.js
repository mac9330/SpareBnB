import React from "react"
import SessionForm from "./session_form";
import {connect} from "react-redux";
import {signup, clearErrors} from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";



const msp = (state, oP) => ({
    errors: state.errors,
    formType: "Sign Up",
    className: "create_account"
});

const mdp = (dispatch) => ({
    action: (currentUser) => dispatch(signup(currentUser)),
    otherForm: () => dispatch(openModal('Login')),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);