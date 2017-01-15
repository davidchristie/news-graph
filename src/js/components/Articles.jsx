import React, { PropTypes } from 'react'
import Article from './Article'

export default class Articles extends React.Component {
  render() {
    const articles = this.props.articles
    return (
      <div className="album text-muted">
        <div className="container">
          <div className="row">
            <div className="card-group">
              {articles.reverse().map(article =>
                <Article
                  key={article.id}
                  article={article}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired
}
