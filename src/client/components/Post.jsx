import moment from 'moment'
import React, { PropTypes } from 'react'
// import { Link } from 'react-router'

const text = post => {
  switch (post.type) {

    case 'ARTICLE':
      return (
        <div>
          <h2>{post.content.url}</h2>
          <p>
            {JSON.stringify(post.content)}
          </p>
        </div>
      )

    default:
      throw new Error('Unknown post type: ' + post.type)
  }
  // switch (post.type) {
  //   case 'ARTICLE':
  //     return (
  //       <h2>post.url<h2>
  //     )
  //
  //   default:
  //     throw new Error('Unknown post type: ' + post.type)
  // }
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
