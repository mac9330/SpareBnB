import merge from 'lodash.merge'

import {RECEIVE_CURRENT_USER} from "../actions/session_actions"
import {RECEIVE_SPOT} from "../actions/spot_actions"

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state); 
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            let {user} = action;
            return merge({[user.id]: user}, state );
        case RECEIVE_SPOT:
            let {users} = action;
            return merge(newState, users, action.user);
        default: 
            return state;
    }
}

export default UsersReducer;