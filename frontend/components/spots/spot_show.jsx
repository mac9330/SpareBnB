import React from "react"
import SpotInformation from "./spot_information"
import SingleSpotMap from "./single_spot_map"


const SpotShow = ({ spot, spotId, fetchSpot, fetchAddress, address }) => {
        
        return (
          <div className="spot-show">
            <SpotInformation
              spot={spot}
              fetchSpot={fetchSpot}
              address={address}
              spotId={spotId}
            />
            <SingleSpotMap
              spotId={spotId}
              fetchSpot={fetchSpot}
              spot={spot}
              fetchAddress={fetchAddress}
            />
          </div>
        );
}

export default SpotShow;