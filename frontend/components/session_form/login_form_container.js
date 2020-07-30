import React from "react"
import SessionForm from "./session_form"
import {connect} from "react-redux"
import {login} from "../../actions/session_actions"
import {openModal, closeModal} from '../../actions/modal_actions';


const msp = (state, oP) => ({
    errors: state.errors,
    formType: "Login",
    className: "login"

})

const mdp = (dispatch) => ({
    action: (currentUser) => dispatch(login(currentUser)),
    otherForm: () => dispatch(openModal('Sign Up')),
    closeModal: () => dispatch(closeModal())


})

export default connect(msp, mdp)(SessionForm)