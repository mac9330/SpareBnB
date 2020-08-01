import merge from "lodash.merge"
import {RECIEVE_SPOTS, RECIEVE_SPOT} from "../actions/spot_actions"

const SpotReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = merge({}, state)

    switch(action.type) {
        case RECIEVE_SPOTS:
            return action.spots;
        case RECIEVE_SPOT:
            return merge(newState, {[action.spot.id]: action.spot});
        default:
            return state;
    }
}

export default SpotReducer;