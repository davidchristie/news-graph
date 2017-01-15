import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ArticleCards from '../components/ArticleCards'
import PostArticle from './PostArticle'

const Home = class Home extends React.Component {
  render() {
    const articles = this.props.articles.reverse()
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Home</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <PostArticle />
        </div>
        <ArticleCards articles={articles} />
      </div>
    )
  }
}

Home.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired
}

function mapStateToProps(state) {
  return {
    articles: state.app.articles
  }
}

export default connect(mapStateToProps)(Home)
