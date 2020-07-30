import * as SESSIONAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"


const recieveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
    errors: []
})


export const login = (currentUser) => dispatch => (
    SESSIONAPIUtil.login(currentUser)
    .then(user => dispatch(recieveCurrentUser(user)),
        err => (
            dispatch(receiveErrors(err.responseJSON))))

)

export const logout = () => dispatch => (
    SESSIONAPIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()),
        err => (
            dispatch(receiveErrors(err.responseJSON))))
)
export const signup = (user) => dispatch => (
    SESSIONAPIUtil.signup(user)
        .then( user => dispatch(recieveCurrentUser(user)),
        err => (
            dispatch(receiveErrors(err.responseJSON))))
)
