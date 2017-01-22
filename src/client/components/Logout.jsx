import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {
  render () {
    const onClick = this.props.onClick
    return (
      <button className='btn btn-danger' onClick={onClick}>
        Logout
      </button>
    )
  }
}

Logout.propTypes = {
  onClick: PropTypes.func.isRequired
}
