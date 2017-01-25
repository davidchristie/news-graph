import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { getProfilePosts } from '../actions/profiles'
import Post from '../components/Post'

export const Posts = class Posts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {posts: []}
  }
  componentDidMount () {
    this.props.dispatch(getProfilePosts({userId: this.props.userId}))
      .then(({ posts }) => {
        this.setState({posts})
      })
  }
  render () {
    const posts = this.state.posts.map((post, index) => {
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
  userId: PropTypes.number.isRequired
}

export default connect()(Posts)
