import React from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/account'
import Alerts from '../components/Alerts'

export class Login extends React.Component {

  constructor (props) {
    super(props)
    this.state = {alerts: []}
  }

  render () {
    const onSubmit = event => {
      event.preventDefault()
      const form = event.target
      const inputs = form.getElementsByTagName('input')
      const email = inputs[0].value
      const password = inputs[1].value
      this.props.dispatch(login({email, password}))
        .then(({ alerts, success }) => {
          if (!success) {
            this.setState({alerts})
          }
        })
    }
    return (
      <div className='dropdown'>
        <button className='btn btn-success dropdown-toggle' type='button' id='dropdownLogin' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          Login
        </button>
        <div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownLogin' style={{minWidth: '300px'}}>

          <Alerts alerts={this.state.alerts} />

          <form role='form' acceptCharset='UTF-8' id='login-nav' onSubmit={onSubmit}>

            <div className='dropdown-item'>
              <label className='sr-only' htmlFor='email'>Email address</label>
              <input type='email' className='form-control' id='email' name='email' placeholder='Email address' required />
            </div>

            <div className='dropdown-item'>
              <label className='sr-only' htmlFor='password'>Password</label>
              <input type='password' className='form-control' id='password' name='password' placeholder='Password' required />
            </div>

            <div className='dropdown-item'>
              <button type='submit' className='btn btn-outline-success btn-block'>Sign in</button>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

export default connect()(Login)
