import moment from 'moment'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

function footer (publishedAt) {
  const date = moment(publishedAt).format('MMMM Do YYYY, h:mm:ss a')
  if (publishedAt) {
    return (
      <div className="card-footer">
        {date}
      </div>
    )
  }
}

export default class ArticleCard extends React.Component {
  render () {
    const article = this.props.article
    const id = article.id
    const title = article.title
    const description = article.description
    // const url = article.url
    const urlToImage = article.urlToImage
    const publishedAt = article.publishedAt
    return (
      <div className="card">
        <img className="card-img-top img-fluid" src={urlToImage} alt="Card image cap"/>
        <div className="card-block">
          <Link to={`article/${id}`}>
            <h4 className="card-title">{title}</h4>
          </Link>
          <p className="card-text">{description}</p>
        </div>
        {footer(publishedAt)}
      </div>
    )
  }
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}
