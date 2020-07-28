const { default: entities_reducer } = require("./entities_reducer")

import entities from "./entities_reducer"
import session from "./session_reducer"
import errors from "./errors_reducer"
import {combineReducers} from "redux"

export default combineReducers({entities}, {session}, {errors})