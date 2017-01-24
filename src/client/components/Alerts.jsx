import React, { PropTypes } from 'react'

import Alert from './Alert'

export default class Alerts extends React.Component {
  render () {
    return (
      <div>
        {this.props.alerts.map(({text, type}, index) => <Alert key={index} text={text} type={type} />)}
      </div>
    )
  }
}

Alerts.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
}
