import SessionForm from "./session_form"
import {connect} from "react-redux"
import {signup} from "../actions/session_actions"


const msp = (state, oP) => ({
    errors: state.errors,
    formType: "sign up"
})

const mdp = (dispatch) => ({
    action: (currentUser) => dispatch(signup(currentUser))
})

export default connect(msp, mdp)(SessionForm)