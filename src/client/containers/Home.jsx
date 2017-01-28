import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ArticleCards from '../components/ArticleCards'
import Jumbotron from '../components/Jumbotron'

export const Home = class Home extends React.Component {
  render () {
    const title = 'Home'
    const articles = this.props.articles
    return (
      <div>
        <Jumbotron title={title} />
        <ArticleCards articles={articles} />
      </div>
    )
  }
}

Home.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired).isRequired
}

function mapStateToProps (state) {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(Home)
