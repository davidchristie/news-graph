import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Jumbotron from '../components/Jumbotron'
import PostArticle from './PostArticle'

const publicContent = () => {
  return (
    <div>
      <h2>Public</h2>
    </div>
  )
}

const privateContent = (profile) => {
  return (
    <div>
      <h2>Private</h2>
      <PostArticle />
    </div>
  )
}

export const Profile = class Profile extends React.Component {
  render () {
    const id = Number(this.props.params.id)
    const profile = this.props.profile
    const title = profile ? profile.name : `Profile ${id}`
    const content = profile && profile.id === id ? privateContent(profile) : publicContent()
    return (
      <div>
        <Jumbotron title={title} />
        <div className='card'>
          <div className='card-block'>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
}

function mapStateToProps (state) {
  return {
    profile: state.app.account.profile
  }
}

export default connect(mapStateToProps)(Profile)
