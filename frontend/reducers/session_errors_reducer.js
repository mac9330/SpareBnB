// import {merge} from "lodash.merge"
import {RECEIVE_SESSION_ERRORS, RECIEVE_CURRENT_USER} from "../actions/session_actions"


const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECIEVE_CURRENT_USER:
            return [];
        default: 
            return state;
    }

}

export default SessionErrorsReducer;