/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'

import Home from './Home'
import reducer from '../reducers'
import state from '../states/example'

const store = createStore(reducer, state)

test('Home renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
