import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">News Graph</Link>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/" onlyActiveOnIndex activeClassName={'active'}>Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="about" activeClassName={'active'}>About</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

          </ul>

          <form className="form-inline my-2 my-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

        </div>
      </nav>
    )
  }
}
