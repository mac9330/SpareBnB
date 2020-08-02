import { UPDATE_BOUNDS } from "../actions/filter_actions";
import merge from 'lodash.merge'



export default (state = {}, action) => {
    const newState = merge({}, state);
    
    switch (action.type) {
        case UPDATE_BOUNDS:
            return {bounds: action.bounds};
        default:
            return state;
    }
}