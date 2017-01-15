import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'
import { createStore } from 'redux'

import About from './components/About'
import Layout from './components/Layout'
import ArticlePage from './containers/ArticlePage'
import Home from './containers/Home'
import reducers from './reducers'

const store = createStore(reducers)
// console.log('Initial state:', store.getState())
// store.subscribe(() => console.log('State change:', store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="article/:id" component={ArticlePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
