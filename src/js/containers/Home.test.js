/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import Home from './Home'
import initialState from '../examples/initial-state'

const store = configureStore()(initialState)

test('Home renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
