import React, { PropTypes } from 'react'

import ArticleNetwork from './ArticleNetwork'

export default class ArticlePage extends React.Component {
  render() {
    const id = this.props.params.id
    return (
      <div className="container">
        <h1>ArticlePage ({id})</h1>
        <div className="row">
          <ArticleNetwork />
        </div>
      </div>
    )
  }
}

ArticlePage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}
