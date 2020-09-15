import * as ReservationAPIUtil from '../util/reservation_api_util'


export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS"
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION"
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS"
export const CLEAR_RESERVATION_ERRORS = "CLEAR_RESERVATION_ERRORS"

const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

const receiveReservation = (payload) => {
    return {
    type: RECEIVE_RESERVATION,
    spots: payload.spots,
    reservations: payload.reservations
}}

const receiveErrors = (errors) => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
})

export const clearReservationErrors = () => ({
    type: CLEAR_RESERVATION_ERRORS,
    errors: []
})


export const fetchReservations = (userId) => dispatch => {
    return ReservationAPIUtil.fetchReservations(userId)
        .then(reservations => (dispatch(receiveReservations(reservations))))
};

export const postReservation = (reservation) => dispatch => (
    ReservationAPIUtil.postReservation(reservation).then(payload => dispatch(receiveReservation(payload)),
    err => (
    dispatch(receiveErrors(err.responseJSON))))
)