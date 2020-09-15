import * as SpotAPIUtil from '../util/spot_api_util'


export const RECEIVE_SPOTS = "RECEIVE_SPOTS"
export const RECEIVE_SPOT = "RECEIVE_SPOT"

const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS,
    spots
})
const receiveSpot = (payload) => {
    return {
    type: RECEIVE_SPOT,
    spot: payload.spot, 
    users: payload.users,
    user: payload.user,
    reviews: payload.reviews,
    averageRating: payload.average_rating,
}}




export const postSpot = (spot) => dispatch => {
    return SpotAPIUtil.postSpot(spot).then(spot => dispatch(receiveSpot(spot)))
}


export const fetchSpots = (filters) => dispatch => {
    return SpotAPIUtil.fetchSpots(filters)
        .then(spots => (dispatch(receiveSpots(spots))
    ))
};

export const fetchSpot = (spotId) => dispatch => ( 
    SpotAPIUtil.fetchSpot(spotId)
        .then(payload => dispatch(receiveSpot(payload)))
)
