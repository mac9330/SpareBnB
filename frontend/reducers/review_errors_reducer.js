// import {merge} from "lodash.merge"
import {RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS} from "../actions/review_actions"


const ReviewErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case CLEAR_REVIEW_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default ReviewErrorsReducer;