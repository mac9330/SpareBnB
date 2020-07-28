import * as SESSIONAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"


const recieveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const recieveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = (currentUser) => dispatch => (
    SESSIONAPIUtil.login(currentUser)
        .then( user => dispatch(recieveCurrentUser(user)))
)
export const logout = () => dispatch => (
    SESSIONAPIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()))
)
export const signup = (user) => dispatch => (
    SESSIONAPIUtil.signup(user)
        .then( user => dispatch(recieveCurrentUser(user)))
)
