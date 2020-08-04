import React from "react"
import {connect} from "react-redux"
import SpotSearch from "./spot_search" 
import { updateBounds } from "../../actions/filter_actions"



const msp = (state, oP) => ({
    spots: Object.values(state.entities.spots)
})

const mdp = (dispatch) => ({
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
})

export default connect(msp, mdp)(SpotSearch)