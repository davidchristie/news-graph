import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// import ArticleNetwork from './ArticleNetwork'
import Jumbotron from '../components/Jumbotron'

export const ArticlePage = class ArticlePage extends React.Component {
  render () {
    const url = this.props.location.query.url
    const articles = this.props.articles
    const title = 'Title'
    const description = 'Description'
    // const article = articles[url]
    // const title = article.title
    // const description = article.description
    // <ArticleNetwork article={article} />
    return (
      <div>
        <Jumbotron title={title} lead={description} />
        <div className='card'>
          <div className='card-block'>
            <h2 className='card-title'>Connections</h2>
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
  location: PropTypes.shape({
    query: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

function mapStateToProps (state) {
  return {
    articles: state.app.articles
  }
}

export default connect(mapStateToProps)(ArticlePage)
