import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class ArticleCard extends React.Component {
  render() {
    const article = this.props.article
    const id = article.id
    const url = article.url
    return (
      <div className="card col-md-6 col-lg-4">
        <a href={url} className="embedly-card"></a>
        <p>
          Some details about the article.
        </p>
        <Link className="btn" to={`article/${id}`}>Details</Link>
      </div>
    )
  }
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}
