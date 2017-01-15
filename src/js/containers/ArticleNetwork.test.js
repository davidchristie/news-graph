/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import ArticleNetwork from './ArticleNetwork'
import initialState from '../examples/initial-state'

const store = configureStore()(initialState)

test('ArticleNetwork renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ArticleNetwork />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
