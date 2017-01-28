import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import vis from 'vis'

const options = {
  nodes: {
    borderWidth: 4,
    size: 30,
    color: {
      border: '#406897',
      background: '#6AAFFF'
    },
    font: {color: '#eeeeee'},
    shape: 'dot'
  },
  edges: {
    arrows: 'to',
    color: 'lightgray'
  }
}

export const ArticleNetwork = function ArticleNetwork (props) {
  const articles = props.articles
  const connections = props.connections
  const data = {articles, connections}
  const style = {
    width: '100%',
    height: '400px',
    border: '1px solid lightgray',
    backgroundColor: '#333333'
  }
  return (
    <div
      ref={
        container => {
          if (container) {
            createNetwork(container, data, options)
          }
        }}
      style={style}
    />
  )
}

ArticleNetwork.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  connections: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    to: PropTypes.number.isRequired
  }).isRequired).isRequired
}

function articleToNode (article) {
  return {
    id: article.id,
    label: article.title
  }
}

function connectionToEdge (connection) {
  return {
    from: connection.from,
    id: connection.id,
    label: connection.name,
    to: connection.to
  }
}

function createNetwork (container, data, options) {
  const { articles, connections } = data
  const nodes = articles.map(articleToNode)
  const edges = connections.map(connectionToEdge)
  return new vis.Network(container, {edges, nodes}, options)
}

function stateToProps (state) {
  return {
    articles: state.articles,
    connections: state.connections
  }
}

export default connect(stateToProps)(ArticleNetwork)
