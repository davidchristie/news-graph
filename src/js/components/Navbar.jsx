import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
    )
  }
}
