import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchProfile } from '../actions/profiles'
import Jumbotron from '../components/Jumbotron'
import Posts from '../components/Posts'
import PostArticle from './PostArticle'

export const Profile = class Profile extends React.Component {
  componentDidMount () {
    this.props.fetchProfile()
  }
  render () {
    const profile = this.props.profile
    const { name, posts, token } = profile
    return (
      <div>
        <Jumbotron title={name} />
        <div className='card'>
          <div className='card-block'>
            {token ? <PostArticle profile={profile} /> : null}
          </div>
        </div>
        {posts ? <Posts posts={posts} /> : null}
      </div>
    )
  }
}

Profile.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.object),
    token: PropTypes.string
  }).isRequired
}

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.params.id)
  const profile = Object.assign({}, state.profiles[id])
  const account = state.account
  if (account.profile && account.profile.id === profile.id) {
    profile.token = account.profile.token
  }
  return {profile}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: () => {
      const userId = Number(ownProps.params.id)
      dispatch(fetchProfile({userId}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
