import React, { PropTypes } from 'react'

export default function Login (props) {
  const onSubmit = props.onSubmit
  return (
    <div className='dropdown'>
      <button className='btn btn-success dropdown-toggle' type='button' id='dropdownLogin' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
        Login
      </button>
      <div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownLogin' style={{minWidth: '300px'}}>

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

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
