/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Search from './Search'

test('Search renders correctly', () => {
  const tree = renderer.create(
    <Search />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
