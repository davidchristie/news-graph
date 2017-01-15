/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import PostArticle from './PostArticle'

const initialState = {}
const store = configureStore()(initialState)

test('PostArticle renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <PostArticle />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
