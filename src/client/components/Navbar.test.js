/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Navbar from './Navbar'

test('Navbar renders correctly', () => {
  const tree = renderer.create(
    <Navbar />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
