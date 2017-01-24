/* eslint-env browser */

import { post } from '../api'

export function login ({email, password}) {
  return dispatch => {
    dispatch({type: 'LOGIN_PENDING'})
    return post('authenticate', {email, password})
      .then(response => response.data)
      .then(data => {
        if (data.success) {
          return dispatch(loginSuccess(data.profile))
        } else {
          return dispatch(loginFailure({
            alerts: data.alerts,
            message: data.message
          }))
        }
      })
      .catch(error => {
        return dispatch(loginFailure({
          alerts: [
            {
              text: error.message,
              type: 'danger'
            }
          ],
          message: error.message
        }))
      })
  }
}

export function loginFailure ({alerts, message}) {
  return {
    alerts,
    message,
    success: false,
    type: 'LOGIN_FAILURE'
  }
}

export function loginSuccess (profile) {
  localStorage.clear()
  localStorage.setItem('profile', JSON.stringify(profile))
  return {
    alerts: [],
    profile: profile,
    success: true,
    type: 'LOGIN_SUCCESS'
  }
}

export function logout () {
  return dispatch => {
    dispatch({type: 'LOGOUT_PENDING'})
    localStorage.clear()
    return Promise.resolve(dispatch({type: 'LOGOUT_SUCCESS'}))
  }
}

export function signup (details) {
  return dispatch => {
    dispatch({details, type: 'SIGNUP_PENDING'})
    return post('profiles', details)
      .then(response => response.data).then(data => {
        if (data.success) {
          return dispatch(signupSuccess())
        } else {
          return dispatch(signupFailure(data))
        }
      })
      .catch(error => {
        return dispatch(signupFailure({
          alerts: [
            {
              text: error.message,
              type: 'danger'
            }
          ],
          message: error.message
        }))
      })
  }
}

export function signupFailure ({alerts, message}) {
  return {
    alerts,
    message,
    success: false,
    type: 'SIGNUP_FAILURE'
  }
}

export function signupSuccess () {
  return {
    alerts: [
      {
        text: 'Signup successful',
        type: 'success'
      }
    ],
    message: 'Signup successful',
    success: true,
    type: 'SIGNUP_SUCCESS'
  }
}
