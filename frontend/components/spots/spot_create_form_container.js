import {connect} from "react-redux"
import SpotCreateForm from "./spot_create_form"
import {postSpot} from "../../actions/spot_actions"


const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    postSpot: (spot) => dispatch(postSpot(spot))
})

export default connect(msp, mdp)(SpotCreateForm);