import React from "react"
import SpotMap from "./spot_map"
import SpotIndex from "./spot_index"




class SpotSearch extends React.Component {



    render() {
        let query = this.props.location.search;
        query = query.slice(1, query.length)
        query = query.split("&")


        debugger;
        return(
            <div className="overflow-hidden">
                <div className="spot-search">
                        <SpotIndex spots={this.props.spots}/>
                    <SpotMap lat={query[0].split("=")[1]} lng={query[1].split("=")[1]}spots={this.props.spots} updateBounds={this.props.updateBounds} />
                </div>

            </div>
        )
    }
}

export default SpotSearch;