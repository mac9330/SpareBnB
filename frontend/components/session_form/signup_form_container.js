import React from "react"
import SessionForm from "./session_form";
import {connect} from "react-redux";
import {signup} from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";



const msp = (state, oP) => ({
    errors: state.errors,
    formType: "Sign Up"
});

const mdp = (dispatch) => ({
    action: (currentUser) => dispatch(signup(currentUser)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);