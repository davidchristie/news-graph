import React, { PropTypes } from 'react'

export default class Alert extends React.Component {
  render () {
    return (
      <div className={`alert alert-${this.props.type}`} role='alert'>
        {this.props.text}
      </div>
    )
  }
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
