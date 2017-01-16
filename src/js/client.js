import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import About from './components/About'
import Join from './components/Join'
import Layout from './components/Layout'
import ArticlePage from './containers/ArticlePage'
import Home from './containers/Home'
import initialState from './examples/initial-state'
import reducers from './reducers'

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(logger())
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="article/:id" component={ArticlePage} />
        <Route path="join" component={Join} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
