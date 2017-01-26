// import moment from 'moment'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// function footer (publishedAt) {
//   const date = moment(publishedAt).format('MMMM Do YYYY, h:mm:ss a')
//   if (publishedAt) {
//     return (
//       <div className='card-footer'>
//         {date}
//       </div>
//     )
//   }
// }

export default class ArticleCard extends React.Component {
  render () {
    const article = this.props.article
    const url = article.url
    const title = article.title
    const description = article.description
    const image = article.thumbnail_url ? <img className='card-img-top img-fluid' src={article.thumbnail_url} alt='Card image cap' /> : null
    return (
      <div className='card'>
        {image}
        <div className='card-block'>
          <Link to={`/articles?url=${url}`}>
            <h4 className='card-title'>{title}</h4>
          </Link>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    )
  }
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}
