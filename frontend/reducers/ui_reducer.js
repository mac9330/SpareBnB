import {combineReducers} from "redux"
import filter from "./filter_reducer.js"
import modal from "./modal_reducer"


export default combineReducers({
    filter,
    modal
})