import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'

import { login, logout } from '../actions/account'
import Login from '../components/Login'
import Logout from '../components/Logout'

const Account = class Account extends Component {
  render () {
    const dispatch = this.props.dispatch
    let content = null
    if (this.props.profile) {
      const clickLogout = () => {
        dispatch(logout())
        browserHistory.push('/')
      }
      content = (
        <ul className='nav navbar-nav navbar-right'>
          <li className='nav-link' onClick={clickLogout}>
            <Logout onClick={clickLogout} />
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
        dispatch(login({email, password}))
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
}

Account.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}

export default connect(state => {
  return {
    profile: state.app.account.profile
  }
})(Account)
