import {connect} from "react-redux"
import SpotShow from "./spot_show"
import {fetchSpot} from "../../actions/spot_actions"
import { fetchAddress } from "../../actions/geo_actions";


const msp = (state, oP) => {
    return {
        spot: state.entities.spots[oP.match.params.spotId],
        spotId: oP.match.params.spotId,
        address: state.address
    }
};


const mdp = (dispatch) => ({
    fetchSpot: (id) => dispatch(fetchSpot(id)),
});


export default connect(msp, mdp)(SpotShow);