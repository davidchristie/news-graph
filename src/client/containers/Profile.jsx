import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Jumbotron from '../components/Jumbotron'

export const Profile = class Profile extends React.Component {
  render () {
    const id = Number(this.props.params.id)
    const profile = this.props.profile
    const title = `Profile ${id}`
    const info = profile && profile.id === id ? 'Private profile information' : 'Public profile information'
    return (
      <div>
        <Jumbotron title={title} />
        <div className='card'>
          <div className='card-block'>
            <h2>{info}</h2>
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
