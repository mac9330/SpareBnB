// import {merge} from "lodash.merge"
import {
    RECEIVE_RESERVATION_ERRORS,
    CLEAR_RESERVATION_ERRORS
} from "../actions/reservation_actions"


const ReservationErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_RESERVATION_ERRORS:
            return action.errors;
        case CLEAR_RESERVATION_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default ReservationErrorsReducer;