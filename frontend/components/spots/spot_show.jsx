import React from "react"
import SpotInformation from "./spot_information"
import SingleSpotMap from "./single_spot_map"
import Reviews from "../reviews/reviews"


const SpotShow = ({
  spot,
  spotId,
  fetchSpot,
  fetchAddress,
  address,
  postReview,
  currentUser,
  reviews,
  users,
  postReservation,
  openModal,
  clearReviewErrors,
  clearReservationErrors,
  errors,
  history,
}) => {
  return (
    <div className="spot-show">
      <SpotInformation
        spot={spot}
        address={address}
        users={users}
        spotId={spotId}
      />
      <Reviews
        spot={spot}
        spotId={spotId}
        postReview={postReview}
        currentUser={currentUser}
        reviews={reviews}
        users={users}
        postReservation={postReservation}
        errors={errors}
        clearReviewErrors={clearReviewErrors}
        clearReservationErrors={clearReservationErrors}
        openModal={openModal}
        history={history}
      />
      <SingleSpotMap
        spotId={spotId}
        fetchSpot={fetchSpot}
        spot={spot}
        fetchAddress={fetchAddress}
      />
    </div>
  );
};

export default SpotShow;