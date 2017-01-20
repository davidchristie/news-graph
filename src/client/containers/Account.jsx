import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'

import { loginSuccess, logout } from '../actions'
import { login } from '../api'
import Login from '../components/Login'

function Account (props) {
  let content = null
  if (props.profile) {
    const clickLogout = () => {
      props.dispatch(logout())
      browserHistory.push('/')
    }
    content = (
      <ul className='nav navbar-nav navbar-right'>
        <li className='nav-link' onClick={clickLogout}>
          <Logout />
        </li>
      </ul>
    )
  } else {
    const submitLogin = event => {
      event.preventDefault()
      const form = event.target
      const inputs = form.getElementsByTagName('input')
      const email = inputs[0].value
      const password = inputs[1].value
      login(email, password).then(response => {
        if (response.success) {
          props.dispatch(loginSuccess(response))
          browserHistory.push('/')
        } else {

        }
      })
    }
    content = (
      <ul className='nav navbar-nav navbar-right'>
        <li className='nav-link'>
          <Link to='/join' className='btn btn-primary'>Signup</Link>
        </li>
        <li className='nav-link'>
          <Login onSubmit={submitLogin} />
        </li>
      </ul>
    )
  }
  return content
}

function Logout (props) {
  return (
    <button className='btn btn-danger' onClick={props.onClick}>
      Logout
    </button>
  )
}

Account.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}

export default connect(state => {
  return {
    profile: state.app.profile
  }
})(Account)
