import * as GeoAPIUtil from '../util/geo_api_util'

export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS"

const receiveAddress = ({address}) => ({ 
    type: RECEIVE_ADDRESS,
    address: address, 
})

export const fetchAddress = (latLng) => dispatch => (
    GeoAPIUtil.fetchAddress(latLng)
    .then(payload => dispatch(receiveAddress(payload)))
)
