import React, {PropTypes} from 'react'

import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  render() {
    const children = this.props.children
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element
}
