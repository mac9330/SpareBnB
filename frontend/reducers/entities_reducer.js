import {combineReducers} from "redux"
import users from "./users_reducer"
import spots from "./spots_reducer"
import reviews from "./reviews_reducer"
// import reservations from "./reservations_reducer"




const entitiesReducer = combineReducers({users, spots, reviews });

export default entitiesReducer;
