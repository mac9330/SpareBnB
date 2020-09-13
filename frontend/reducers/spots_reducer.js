import merge from "lodash.merge"
import {RECEIVE_SPOTS, RECEIVE_SPOT} from "../actions/spot_actions"

const SpotReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = merge({}, state)
    
    switch(action.type) {
        case RECEIVE_SPOTS:
            return action.spots;
        case RECEIVE_SPOT:
            const {spot, user, reviews} = action;
            return merge(newState, { [spot.id]: spot });
        default:
            return state;
    }
}

export default SpotReducer;