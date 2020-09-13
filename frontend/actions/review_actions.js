import * as ReviewAPIUtil from '../util/review_api_util'


export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

const receiveReview = (reviews) => ({
    type: RECEIVE_REVIEW,
    reviews
})


export const postReview = (review) => dispatch => {
    return ReviewAPIUtil.postReview(review).then(review => dispatch(receiveReview(review)))
}


// export const fetchReviews = (reviews) => dispatch => {
//     return ReviewAPIUtil.fetchReviews(reviews)
//         .then(reviews => (dispatch(receiveReviews(reviews))))
// };