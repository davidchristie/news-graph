/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Jumbotron from './Jumbotron'

test('Jumbotron renders correctly', () => {
  const tree = renderer.create(
    <Jumbotron title="jumbotron" />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
