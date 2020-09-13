import {connect} from "react-redux"
import SpotShow from "./spot_show"
import {fetchSpot} from "../../actions/spot_actions"
import {postReview} from "../../actions/review_actions";


const msp = (state, oP) => {
    return {
        spot: state.entities.spots[oP.match.params.spotId],
        spotId: oP.match.params.spotId,
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.reviews,
        users: state.entities.users,
    }
};


const mdp = (dispatch) => ({
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    postReview: (review) => dispatch(postReview(review)),
});


export default connect(msp, mdp)(SpotShow);