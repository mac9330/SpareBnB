import React from "react"
import SpotMap from "./spot_map"
import SpotIndex from "./spot_index"




class SpotSearch extends React.Component {


    render() {
        return(
            <div>
                    <SpotMap spots={this.props.spots} updateBounds={this.props.updateBounds} />
                    <SpotIndex spots={this.props.spots}/>
            </div>
        )
    }
}

export default SpotSearch;