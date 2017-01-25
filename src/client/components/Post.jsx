import moment from 'moment'
import React, { PropTypes } from 'react'
// import { Link } from 'react-router'

const Article = props => {
  const article = props.article
  const thumbnail = article.thumbnail_url ? <img className='card-img-top img-fluid rounded float-left' src={article.thumbnail_url} alt='Article thumbnail' style={{width: '300px'}} /> : null
  const author = article.author ? <p>{article.author}</p> : null
  const provider = article.provider_name ? <p>{article.provider_name}</p> : null
  return (
    <div>
      {thumbnail}
      <div>
        <h4>{article.title}</h4>
        <p className='card-text'>
          {article.description}
          {author}
          {provider}
        </p>
      </div>
    </div>
  )
}

const text = post => {
  switch (post.type) {

    case 'ARTICLE':
      return (<Article article={post.content} />)

    default:
      throw new Error('Unknown post type: ' + post.type)
  }
}

export default class Post extends React.Component {
  render () {
    const date = moment(this.props.post.time).format('MMMM Do YYYY, h:mm:ss a')
    return (
      <div className='card'>
        <div className='card-block'>
          {text(this.props.post)}
        </div>
        <div className='card-footer'>
          {date}
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.object.isRequired,
    time: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
}
