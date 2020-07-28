// import merge from 'lodash.merge'

import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_ERRORS
} from "../actions/session_actions"


const SessionReducer = (state = {id: null}, action) => {
    Object.freeze(state)
    // const newState = merge({}, state)

    switch(action.type) {

        case RECEIVE_CURRENT_USER:
            return {id: action.user.id};
        case LOGOUT_CURRENT_USER:
            return {id: null};
        default:
            return state;
    }

}

export default SessionReducer;