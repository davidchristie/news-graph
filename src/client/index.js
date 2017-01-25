/* eslint-env browser */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { addArticle } from './actions/articles'
import { loginSuccess } from './actions/account'
import * as api from './api'
import About from './components/About'
import Join from './containers/Join'
import Layout from './components/Layout'
import ArticlePage from './containers/ArticlePage'
import Home from './containers/Home'
import Profile from './containers/Profile'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

// Check if already logged in to a profile
if (localStorage.getItem('profile')) {
  const profile = JSON.parse(localStorage.getItem('profile'))
  store.dispatch(loginSuccess(profile))
}

// Load articles from the API
api.getFeaturedArticles()
  .then(articles => {
    articles.forEach(article => {
      store.dispatch(addArticle(article))
    })
  })

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
        <Route path='article/:id' component={ArticlePage} />
        <Route path='join' component={Join} />
        <Route path='profile/:id' component={Profile} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
