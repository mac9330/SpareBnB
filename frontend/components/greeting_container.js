import Greeting from "./greeting"
import {connect} from "react-redux"
import {logout} from "../actions/session_actions"

const msp = ({ session, entities: { users } }) => ({
    currentUser: null

});
// currentUser: users[session.id]

const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);