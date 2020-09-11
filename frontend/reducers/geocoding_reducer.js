import merge from "lodash.merge"
import {RECEIVE_ADDRESS} from '../actions/geo_actions'

export default (state = {}, action) => {
    Object.freeze(state)
    const newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_ADDRESS:
            debugger;
            return merge(newState, action.address)
        default:
            return state;
    }
}