import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import About from './components/About'
import Layout from './components/Layout'
import ArticlePage from './containers/ArticlePage'
import Home from './containers/Home'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="article/:id" component={ArticlePage} />
    </Route>
  </Router>,
  document.getElementById('app')
)
