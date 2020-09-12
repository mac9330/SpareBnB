import React from "react"
import SpotIndexItem from "./spot_index_item"




const SpotIndex = (props) => {

    return props.spots.length === 0 ?  <div className="idx-empty">Sorry, there are currently no Listings Available in this area</div> : (
        <div>
        <ul className="spot-idx">
            {
                props.spots.map(spot => (<SpotIndexItem className="spot-index-item" spot={spot} key={spot.id}/>))
                
            }
        </ul>
    </div>
    ) 

}

export default SpotIndex;

