import React, { PropTypes } from 'react'

export default class ArticlePage extends React.Component {
  render() {
    const id = this.props.params.id
    return (
      <div>
        <h1>ArticlePage ({id})</h1>
      </div>
    )
  }
}

ArticlePage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}
