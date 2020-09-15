import {connect} from "react-redux"
import { fetchReservations } from "../../actions/reservation_actions";
import BookingsIndex from "./reservations_index"



const msp = ( state, oP) => ({
    bookings: state.entity.bookings,
});


const mdp = (dispatch) => ({
    fetchReservations: (userId) => dispatch(fetchReservations(userId)),
    
});


export default connect(msp, mdp)(BookingsIndex);

