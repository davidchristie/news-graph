import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { postArticle } from '../actions/articles'

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
    const token = this.props.token
    const url = this.state.value
    this.props.dispatch(postArticle({token, url}))
    this.setState({value: ''})
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-inline'>
          <input className='form-control' type='url' value={this.state.value} onChange={this.handleChange} placeholder='Article' />
          <input className='btn btn-outline-success' type='submit' value='POST' />
        </div>
      </form>
    )
  }
}

PostArticle.propTypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  const profile = state.app.account.profile
  return {
    token: profile ? profile.token : null
  }
}

export default connect(mapStateToProps)(PostArticle)
