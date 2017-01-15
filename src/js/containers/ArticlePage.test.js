/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import ArticlePage from './ArticlePage'

test('ArticlePage renders correctly', () => {
  const tree = renderer.create(
    <ArticlePage params={{id: '1'}}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
