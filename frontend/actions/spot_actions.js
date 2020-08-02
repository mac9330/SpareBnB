import * as SpotAPIUtil from '../util/spot_api_util'


export const RECIEVE_SPOTS = "RECIEVE_SPOTS"
export const RECIEVE_SPOT = "RECIEVE_SPOT"

const recieveSpots = (spots) => ({
    type: RECIEVE_SPOTS,
    spots
})
const recieveSpot = (spot) => ({
    type: RECIEVE_SPOTS,
    spot
})

export const fetchSpots = (filters) => dispatch => {
    return SpotAPIUtil.fetchSpots(filters)
        .then(spots => (dispatch(recieveSpots(spots))
    ))
};

export const fetchSpot = (spotId) => dispatch => (
    SpotAPIUtil.fetchSpot()
        .then(spot => dispatch(recieveSpot(spot)))
        
)


export const fetchBenches = filters => dispatch => (
    APIUtil.fetchBenches(filters)
        .then(benches => dispatch(receiveBenches(benches)
    ))
);