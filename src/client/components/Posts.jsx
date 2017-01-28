import React, { PropTypes } from 'react'
import Post from './Post'

export default class Posts extends React.Component {
  render () {
    const posts = this.props.posts.map((post, index) => {
      return <Post key={index} post={post} />
    })
    return (
      <div>
        <h2>Posts</h2>
        {posts}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}
