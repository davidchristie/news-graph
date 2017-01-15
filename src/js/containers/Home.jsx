import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import ArticleCards from '../components/ArticleCards'

const Home = class Home extends React.Component {
  render() {
    const articles = this.props.articles
    return (
      <div>
        <h1>Home</h1>
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
  return { articles: state.app.articles }
}

export default connect(mapStateToProps)(Home)