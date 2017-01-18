/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Join from './Join'

test('Join renders correctly', () => {
  const tree = renderer.create(
    <Join />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
