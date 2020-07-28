import merge from 'lodash.merge'

import {RECEIVE_CURRENT_USER} from "../actions/session_actions"

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    // const newState = merge({}, state); 
    const {user} = action;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({[user.id]: user}, state );
        default: 
            return state;
    }
}

export default UsersReducer;