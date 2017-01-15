/* eslint-disable no-undef */

import React from 'react'
import renderer from 'react-test-renderer'

import About from './About'

test('About renders correctly', () => {
  const tree = renderer.create(
    <About />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
