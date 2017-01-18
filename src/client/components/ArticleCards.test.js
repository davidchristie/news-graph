/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import ArticleCards from './ArticleCards'
import state from '../states/example'

const articles = state.app.articles

test('ArticleCards renders correctly', () => {
  const tree = renderer.create(
    <ArticleCards articles={articles} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
