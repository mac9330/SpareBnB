import {combineReducers} from "redux"
import SessionErrorsReducer from "./session_errors_reducer"
import ReviewErrorsReducer from "./review_errors_reducer"
import ReservationErrorsReducer from "./reservation_errors_reducer"

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    review: ReviewErrorsReducer,
    reservation: ReservationErrorsReducer,
})

export default ErrorsReducer;

