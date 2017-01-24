import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'

import { logout } from '../actions/account'
import Login from './Login'
import Logout from '../components/Logout'

export const Account = class Account extends Component {
  render () {
    const dispatch = this.props.dispatch
    let content = null
    if (this.props.profile) {
      const profile = this.props.profile
      const clickLogout = () => {
        dispatch(logout())
      }
      content = (
        <ul className='nav navbar-nav navbar-right'>

          <li className='nav-link'>
            <Link to={`/profile/${profile.id}`} className='btn btn-info'>Profile</Link>
          </li>

          <li className='nav-link'>
            <Logout onClick={clickLogout} />
          </li>
        </ul>
      )
    } else {
      content = (
        <ul className='nav navbar-nav navbar-right'>
          <li className='nav-link'>
            <Link to='/join' className='btn btn-primary'>Signup</Link>
          </li>
          <li className='nav-link'>
            <Login />
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
