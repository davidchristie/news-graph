import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import vis from 'vis'

const ArticleNetwork = class ArticleNetwork extends React.Component {
  constructor(props) {
    super(props)
    this.createNetwork = this.createNetwork.bind(this)
  }
  createNetwork() {

    const articles = this.props.articles

    const nodes = articles.map(article => {
      return {
        id: article.id,
        label: article.url
      }
    })

    const edges = []

    const data = {
      nodes,
      edges
    }

    const options = {
      nodes: {
        borderWidth:4,
        size:30,
        color: {
          border: '#406897',
          background: '#6AAFFF'
        },
        font:{color:'#eeeeee'},
        shape: 'dot'
      },
      edges: {
        color: 'lightgray'
      }
    }

    new vis.Network(this.container, data, options)
  }
  render() {
    return (
      <div
        ref={container => {
          if (container) {
            this.container = container
            this.createNetwork()
          }
        }}
        style={{
          width: '100%',
          height: '400px',
          border: '1px solid lightgray',
          backgroundColor: '#333333'
        }}
      />
    )
  }
}

ArticleNetwork.propTypes = {
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

export default connect(mapStateToProps)(ArticleNetwork)
