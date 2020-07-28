import Greeting from "./greeting"
import {connect} from "react-redux"
import {logout} from "../../actions/session_actions"

const msp = ({session, entities: {user}}) => {
    return {currentUser: user[session.id]}

}
// currentUser: users[session.id]

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),

});

export default connect(msp, mdp)(Greeting);