import React from "react"
import SpotInformation from "./spot_information"
import SingleSpotMap from "./single_spot_map"


const SpotShow = ({ spot, spotId, fetchSpot }) => {

        
        return(
            <div className="spot-show">
                <SpotInformation spot={spot} fetchSpot={fetchSpot} />
                <SingleSpotMap spotId={spotId} fetchSpot={fetchSpot} spot={spot} />

            </div>
        )
}

export default SpotShow;