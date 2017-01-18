/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'

import PostArticle from './PostArticle'
import reducer from '../reducers'
import state from '../states/example'

const store = createStore(reducer, state)

test('PostArticle renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <PostArticle />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
