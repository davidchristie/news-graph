import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { postArticle } from '../actions/articles'
import { fetchProfile } from '../actions/profiles'

export class PostArticle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({value: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    const url = this.state.value
    this.props.postArticle(url)
    this.setState({value: ''})
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-inline row'>
          <input className='form-control col-10' type='url' value={this.state.value} onChange={this.handleChange} placeholder='Article' />
          <input className='btn btn-outline-success col-2' type='submit' value='POST' />
        </div>
      </form>
    )
  }
}

PostArticle.propTypes = {
  postArticle: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    token: PropTypes.string.isRequired
  }).isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const profile = ownProps.profile
  const token = profile.token
  return {
    postArticle: url => {
      dispatch(postArticle({token, url}))
        .then(() => dispatch(fetchProfile({userId: profile.id})))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PostArticle)
