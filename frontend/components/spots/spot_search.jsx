import React from "react"
import SpotMap from "./spot_map"
import SpotIndex from "./spot_index"




class SpotSearch extends React.Component {


    render() {
        return(
            <div className="overflow-hidden">
                <div className="spot-search">
                        <SpotIndex spots={this.props.spots}/>
                        <SpotMap spots={this.props.spots} updateBounds={this.props.updateBounds} />
                </div>

            </div>
        )
    }
}

export default SpotSearch;