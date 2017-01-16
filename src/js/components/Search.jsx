import React from 'react'

export default class Search extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}
