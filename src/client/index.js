/* eslint-env browser */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import { addArticle } from './actions/articles'
import { loginSuccess } from './actions/account'
import * as api from './api'
import About from './components/About'
import Join from './containers/Join'
import Layout from './components/Layout'
import ArticlePage from './containers/ArticlePage'
import Home from './containers/Home'
import Profile from './containers/Profile'
import store from './store'

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

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
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
