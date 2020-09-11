import entities from "./entities_reducer"
import session from "./session_reducer"
// import errors from "./errors_reducer"
import {combineReducers} from "redux"
import errors from "./errors_reducer"
import ui from "./ui_reducer"
import geocoding from './geocoding_reducer'


export default combineReducers({entities, geocoding, session, errors, ui }) 