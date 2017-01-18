import React, {PropTypes} from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

export default class Layout extends React.Component {
  render () {
    const children = this.props.children
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element
}
