import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bd-footer text-muted" style={{marginTop: '100px'}}>
        <div className="container">
          <a href="https://github.com/davidchristie/news-graph">GitHub</a>
          <p>
            Insert footer content here.
          </p>
        </div>
      </footer>
    )
  }
}
