import React, { PropTypes } from 'react'

export default class Jumbotron extends React.Component {
  render () {
    const children = this.props.children
    const title = this.props.title
    const lead = this.props.lead
    const text = this.props.text
    return (
      <div>
        <div className='jumbotron'>
          <h1 className='display-3'>{title}</h1>
          <p className='lead'>{lead}</p>
          <hr className='my-4' />
          <p>{text}</p>
          {children}
        </div>
      </div>
    )
  }
}

Jumbotron.propTypes = {
  children: PropTypes.element,
  lead: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
}
