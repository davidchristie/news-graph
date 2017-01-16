import React, { PropTypes } from 'react'
import ArticleCard from './ArticleCard'

export default class ArticleCards extends React.Component {
  render() {
    const articles = this.props.articles
    return (
      <div className="album text-muted">
        <div className="row">
          <div className="card-group">
            {articles.map(article =>
              <ArticleCard
                key={article.id}
                article={article}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

ArticleCards.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired
}
