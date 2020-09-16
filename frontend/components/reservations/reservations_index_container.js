import {connect} from "react-redux"
import { fetchReservations } from "../../actions/reservation_actions";
import ReservationsIndex from "./reservations_index"



const msp = ( state, oP) => ({
    reservations: state.entities.reservations,
    currentUser: state.entities.users[state.session.id],
    spots: state.entities.spots,
});


const mdp = (dispatch) => ({
    fetchReservations: (userId) => dispatch(fetchReservations(userId)),
});


export default connect(msp, mdp)(ReservationsIndex);

