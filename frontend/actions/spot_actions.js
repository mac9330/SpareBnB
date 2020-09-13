import * as SpotAPIUtil from '../util/spot_api_util'


export const RECEIVE_SPOTS = "RECEIVE_SPOTS"
export const RECEIVE_SPOT = "RECEIVE_SPOT"

const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS,
    spots
})
const receiveSpot = ({spot, user, reviews}) => ({ // todo add to users reducer
    type: RECEIVE_SPOT,
    spot, 
    user,
    reviews,
})




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
