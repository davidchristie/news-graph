import { post } from '../api'

export function login ({email, password}) {
  return dispatch => {
    dispatch({type: 'LOGIN_PENDING'})
    return post('login', {email, password})
      .then(response => response.data)
      .then(data => {
        if (data.success) {
          dispatch({
            message: data.message,
            profile: data.profile,
            type: 'LOGIN_SUCCESS'
          })
        } else {
          dispatch({
            message: data.message,
            type: 'LOGIN_FAILURE'
          })
        }
      })
      .catch(error => {
        dispatch({
          message: error.message,
          type: 'LOGIN_FAILURE'
        })
      })
  }
}

export function logout () {
  return dispatch => {
    dispatch({type: 'LOGOUT_PENDING'})
    return Promise.resolve(dispatch({type: 'LOGOUT_SUCCESS'}))
  }
}

export function signup (details) {
  return dispatch => {
    dispatch({details, type: 'SIGNUP_PENDING'})
    return post('signup', details)
      .then(response => response.data).then(data => {
        const alerts = data.alerts
        if (data.success) {
          return dispatch({
            alerts,
            message: data.message,
            type: 'SIGNUP_SUCCESS'
          })
        } else {
          return dispatch({
            alerts,
            message: data.message,
            type: 'SIGNUP_FAILURE'
          })
        }
      })
      .catch(error => {
        dispatch({
          message: error.message,
          type: 'SIGNUP_FAILURE'
        })
      })
  }
}
