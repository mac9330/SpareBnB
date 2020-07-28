// import merge from 'lodash.merge'

import {
    RECIEVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_ERRORS
} from "../actions/session_actions"


const SessionReducer = (state = {}, action) => {
    Object.freeze(state)
    // const newState = merge({}, state)

    switch(action.type) {

        case RECIEVE_CURRENT_USER:
            return {id: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return {id: null};
        default:
            return state;
    }

}

export default SessionReducer;