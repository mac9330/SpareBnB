import Greeting from "./greeting"
import {connect} from "react-redux"
import {logout} from "../../actions/session_actions"
import {openModal} from "../../actions/modal_actions"

const msp = ({session, errors, entities: {users}}) => {
    return {
        currentUser: users[session.id]
    }
}

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Greeting);