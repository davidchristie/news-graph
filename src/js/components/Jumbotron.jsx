import React, { PropTypes } from 'react'

export default class Jumbotron extends React.Component {
  render() {
    const children = this.props.children
    const title = this.props.title
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">{title}</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          {children}
        </div>
      </div>
    )
  }
}

Jumbotron.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired
}
