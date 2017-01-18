/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'

import ArticlePage from './ArticlePage'
import reducer from '../reducers'
import state from '../states/example'

const store = createStore(reducer, state)
const article = state.app.articles[0]
const id = article.id

test('ArticlePage renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ArticlePage article={article} params={{id: String(id)}} />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
