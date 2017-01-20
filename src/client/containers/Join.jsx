import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { signupFailure, signupSuccess } from '../actions'
import { signup } from '../api'
import Jumbotron from '../components/Jumbotron'

const Join = class Join extends React.Component {

  constructor (props) {
    super(props)
    this.inputs = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const form = event.target
    signup()
      .then(response => {
        if (response.success) {
          form.reset()
          browserHistory.push('/')
          this.props.dispatch(signupSuccess(response))
        } else {
          this.props.dispatch(signupFailure(response))
        }
      })
  }

  render () {
    const title = 'Join'
    return (
      <div>
        <Jumbotron title={title} />

        <div className='card'>
          <div className='card-block'>

            <form onSubmit={this.handleSubmit}>

              <div className='form-group'>
                <label htmlFor='join-name'>Name</label>
                <input id='join-name' type='text' className='form-control' placeholder='Name' name='name' required ref={input => { this.inputs.name = input }} />
              </div>

              <div className='form-group'>
                <label htmlFor='join-email'>Email</label>
                <input id='join-email' type='email' className='form-control' placeholder='Email address' name='email' required ref={input => { this.inputs.email = input }} />
              </div>

              <div className='form-group'>
                <label htmlFor='join-password'>Password</label>
                <input id='join-password' type='password' className='form-control' placeholder='Password' name='password' required ref={input => { this.inputs.password = input }} />
              </div>

              <div className='form-group'>
                <label htmlFor='join-password2'>Confirm Password</label>
                <input id='join-password2' type='password' className='form-control' placeholder='Re-type password' name='password2' required ref={input => { this.inputs.password2 = input }} />
              </div>

              <button type='submit' className='btn btn-outline-success'>Submit</button>

            </form>

          </div>
        </div>
      </div>
    )
  }

}

Join.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Join)
