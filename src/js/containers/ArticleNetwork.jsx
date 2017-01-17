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
    const connections = this.props.connections

    const nodes = articles.map(article => {
      const node = {
        id: article.id,
        image: article.urlToImage,
        label: article.title
      }
      // TODO Highlight the selected article
      // if (article.id ===this.props.article.id)
      // node.color = {
      //   border: '#FF5733'
      // }
      return node
    })

    const edges = connections.map(connection => {
      return {
        from: connection.from,
        id: connection.id,
        label: connection.name,
        to: connection.to
      }
    })

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
        shape: 'circularImage'
      },
      edges: {
        arrows: 'to',
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
  }).isRequired).isRequired,
}

function mapStateToProps(state) {
  return {
    articles: state.app.articles,
    connections: state.app.connections
  }
}

export default connect(mapStateToProps)(ArticleNetwork)
