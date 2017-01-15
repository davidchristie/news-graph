import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
)
