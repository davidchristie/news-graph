/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'

import ArticleNetwork from './ArticleNetwork'
import reducer from '../reducers'
import state from '../states/example'

const store = createStore(reducer, state)

test('ArticleNetwork renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ArticleNetwork />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
