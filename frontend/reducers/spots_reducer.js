import merge from "lodash.merge"
import {RECEIVE_SPOTS, RECEIVE_SPOT} from "../actions/spot_actions"
import {RECEIVE_RESERVATION, RECEIVE_RESERVATIONS} from "../actions/reservation_actions"

const SpotReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = merge({}, state)
    
    switch(action.type) {
        case RECEIVE_SPOTS:
            return action.spots;
        case RECEIVE_SPOT:
            const {spot} = action;
            return merge(newState, { [spot.id]: spot});
            case RECEIVE_RESERVATION:
                const {spots} = action;
                return spots

            case RECEIVE_RESERVATIONS:
                return action.spots
        default:
            return state;
    }
}

export default SpotReducer;