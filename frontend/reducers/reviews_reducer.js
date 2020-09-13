import merge from "lodash.merge"
import {RECEIVE_REVIEW} from "../actions/review_actions"
import {RECEIVE_SPOT} from "../actions/spot_actions"

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = merge({}, state)
    switch (action.type) {
        case RECEIVE_SPOT: 
            const {reviews} = action;
            return reviews;
        case RECEIVE_REVIEW: 
            const {review} = action;
            return merge(newState, review)
        default:
            return state;
    }
}

export default ReviewsReducer;