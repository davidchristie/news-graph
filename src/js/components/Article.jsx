import React, { PropTypes } from 'react'

export default class Article extends React.Component {
  render() {
    const article = this.props.article
    const url = article.url
    return (
      <div className="card col-md-6 col-lg-4">
        <a href={url} className="embedly-card"></a>
        <p>
          Some details about the article.
        </p>
      </div>
    )
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}
