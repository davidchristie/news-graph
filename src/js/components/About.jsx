import React from 'react'

import Jumbotron from './Jumbotron'

export default class About extends React.Component {
  render() {
    const title = 'About'
    return (
      <div>
        <Jumbotron title={title} />
      </div>
    )
  }
}
