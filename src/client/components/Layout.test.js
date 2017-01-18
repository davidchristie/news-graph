/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Layout from './Layout'

test('Layout renders correctly', () => {
  const tree = renderer.create(
    <Layout />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
