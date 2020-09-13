import React from "react"
import SpotInformation from "./spot_information"
import SingleSpotMap from "./single_spot_map"
import Reviews from "../reviews/reviews"


const SpotShow = ({ spot, spotId, fetchSpot, fetchAddress, address, postReview, currentUser, owner, reviews }) => {
        
        return (
          <div className="spot-show">
            <SpotInformation
              spot={spot}
              fetchSpot={fetchSpot}
              address={address}
              owner={owner}
            />
            <Reviews spot={spot} spotId={spotId} postReview={postReview} currentUser={currentUser} reviews={reviews} />
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