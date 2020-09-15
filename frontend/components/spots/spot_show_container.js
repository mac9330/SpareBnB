import {connect} from "react-redux"
import SpotShow from "./spot_show"
import {fetchSpot} from "../../actions/spot_actions"
import {postReview} from "../../actions/review_actions";
import { postReservation } from "../../actions/reservation_actions";
import { openModal } from '../../actions/modal_actions';
import {clearReviewErrors} from '../../actions/review_actions'
import {clearReservationErrors} from '../../actions/reservation_actions'


const msp = (state, oP) => {
    return {
        spot: state.entities.spots[oP.match.params.spotId],
        spotId: oP.match.params.spotId,
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.reviews,
        users: state.entities.users,
        errors: state.errors,
    }
};


const mdp = (dispatch) => ({
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    postReview: (review) => dispatch(postReview(review)),
    postReservation: (reservation) => dispatch(postReservation(reservation)),
    openModal: (login) => dispatch(openModal(login)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    clearReservationErrors: () => dispatch(clearReservationErrors()),
});


export default connect(msp, mdp)(SpotShow);