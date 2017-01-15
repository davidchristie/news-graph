import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { postArticle } from '../actions'

class PostArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(postArticle(this.state.value))
    this.setState({value: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Article:
          <input type="url" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="POST" />
      </form>
    )
  }
}

PostArticle.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(PostArticle)
