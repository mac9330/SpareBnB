import SessionForm from "./session_form"
import {connect} from "react-redux"
import {login} from "../actions/session_actions"

const msp = (state, oP) => ({
    errors: state.errors,
    formType: "login"

})

const mdp = (dispatch) => ({
    action: (currentUser) => dispatch(login(currentUser))

})

export default connect(msp, mdp)(SessionForm)