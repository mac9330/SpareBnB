import merge from "lodash.merge"
import {
    RECEIVE_RESERVATIONS,
    RECEIVE_RESERVATION
} from "../actions/reservation_actions"

const ReservationsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = merge({}, state)

    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            action.reservations;
        case RECEIVE_RESERVATION:
            const {reservations} = action;
            return reservations
        default:
            return state;
    }
}

export default ReservationsReducer;