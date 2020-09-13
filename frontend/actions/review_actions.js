import * as ReviewAPIUtil from '../util/review_api_util'


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const postReview = (review) => dispatch => {
    return ReviewAPIUtil.postReview(review).then(review => dispatch(receiveReviews(review)))
}


// export const fetchReviews = (reviews) => dispatch => {
//     return ReviewAPIUtil.fetchReviews(reviews)
//         .then(reviews => (dispatch(receiveReviews(reviews))))
// };