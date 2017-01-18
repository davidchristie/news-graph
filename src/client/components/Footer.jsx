import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className='bd-footer text-muted' style={{marginTop: '100px'}}>
        <div className='container'>
          <p>
            <a href='https://github.com/davidchristie/news-graph'>GitHub</a>
          </p>
          <p>
            Powered by <a href='https://newsapi.org'>NewsAPI.org</a>
          </p>
        </div>
      </footer>
    )
  }
}
