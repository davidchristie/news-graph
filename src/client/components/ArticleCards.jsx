import React, { PropTypes } from 'react'
import ArticleCard from './ArticleCard'

export default class ArticleCards extends React.Component {
  render () {
    const articles = this.props.articles
    return (
      <div className='card-columns'>
        {articles.map((article, index) =>
          <ArticleCard
            key={index}
            article={article}
          />
        )}
      </div>
    )
  }
}

ArticleCards.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired
  })).isRequired
}
