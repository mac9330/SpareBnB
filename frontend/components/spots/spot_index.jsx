import React from "react"
import SpotIndexItem from "./spot_index_item"




const SpotIndex = ({spots}) => {

    return(
        <ul className="spot-idx">
            {
                spots.map(spot => (<SpotIndexItem className="spot-index-item" spot={spot} key={spot.id}/>))
            }
        </ul>
    ) 

}

export default SpotIndex;

