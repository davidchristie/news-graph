import React from 'react'
import { Link } from 'react-router'

import Login from './Login'
import Search from './Search'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse'>
        <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarMenu' aria-controls='navbarMenu' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <Link className='navbar-brand' to='/'>News Graph</Link>

        <div className='collapse navbar-collapse' id='navbarMenu'>
          <ul className='navbar-nav mr-auto'>

            <li className='nav-link'>
              <Link className='nav-link' to='about' activeClassName={'active'}>About</Link>
            </li>

            <li className='nav-link dropdown'>
              <a className='nav-link dropdown-toggle' href='http://example.com' id='dropdown01' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Dropdown</a>
              <div className='dropdown-menu' aria-labelledby='dropdown01'>
                <a className='dropdown-item' href='#'>Action</a>
                <a className='dropdown-item' href='#'>Another action</a>
                <a className='dropdown-item' href='#'>Something else here</a>
              </div>
            </li>

            <li className='nav-item'>
              <Search />
            </li>

          </ul>

          <ul className='nav navbar-nav navbar-right'>

            <li className='nav-link'>
              <Link to='/join' className='btn btn-primary'>Signup</Link>
            </li>

            <li className='nav-link'>
              <Login />
            </li>

          </ul>

        </div>
      </nav>
    )
  }
}
