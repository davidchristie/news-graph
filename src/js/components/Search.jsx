import React from 'react'

export default class Search extends React.Component {
  render() {
    return (
      <form className="form-inline my-2 my-md-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    )
  }
}
