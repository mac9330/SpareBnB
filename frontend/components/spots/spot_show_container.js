import {connect} from "react-redux"
import SpotShow from "./spot_show"
import {fetchSpot} from "../../actions/spot_actions"


const msp = (state, oP) => {
    return {spot: state.entities.spots[oP.match.params.spotId]}
};


const mdp = (dispatch) => ({
    fetchSpot: (id) => dispatch(fetchSpot(id))
});


export default connect(msp, mdp)(SpotShow);