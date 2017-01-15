import React from 'react'

import Navbar from './Navbar'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
        <Navbar />
      </header>
    )
  }
}
