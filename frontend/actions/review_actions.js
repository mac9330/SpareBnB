import * as ReviewAPIUtil from '../util/review_api_util'


export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS"

const receiveReview = (reviews) => ({
    type: RECEIVE_REVIEW,
    reviews
})

const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const clearReviewErrors = () => ({
    type: CLEAR_REVIEW_ERRORS,
    errors: []
})


export const postReview = (review) => dispatch => (
    ReviewAPIUtil.postReview(review).then(review => dispatch(receiveReview(review)),
        err => (
        dispatch(receiveErrors(err.responseJSON))))
)