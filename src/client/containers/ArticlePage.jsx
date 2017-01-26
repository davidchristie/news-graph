import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ArticleNetwork from './ArticleNetwork'
import Jumbotron from '../components/Jumbotron'

export const ArticlePage = class ArticlePage extends React.Component {
  render () {
    const url = this.props.query.url
    const articles = this.props.articles
    const article = articles.find(article => article.url === url)
    const title = article.title
    const description = article.description
    return (
      <div>
        <Jumbotron title={title} lead={description} />
        <div className='card'>
          <div className='card-block'>
            <h2 className='card-title'>Connections</h2>
            <ArticleNetwork article={article} />
          </div>
        </div>
      </div>
    )
  }
}

ArticlePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
  query: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}

function mapStateToProps (state) {
  return {
    articles: state.app.articles
  }
}

export default connect(mapStateToProps)(ArticlePage)
