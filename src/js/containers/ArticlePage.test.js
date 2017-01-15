/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import ArticlePage from './ArticlePage'
import initialState from '../examples/initial-state'

const store = configureStore()(initialState)
const id = 1
const article = initialState.app.articles.find(article => article.id === id)

test('ArticlePage renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ArticlePage article={article} params={{id: String(id)}} />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
