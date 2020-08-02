import React from "react"
import SpotIndexItem from "./spot_index_item"




const SpotIndex = ({spots}) => {


    return(
        <ul>
            {
                spots.map(spot => (<SpotIndexItem spot={spot} key={spot.id}/>))
            }
        </ul>
    ) 

}

export default SpotIndex;

