/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import ArticleCard from './ArticleCard'
import state from '../states/example'

const article = state.app.articles[0]

test('ArticleCard renders correctly', () => {
  const tree = renderer.create(
    <ArticleCard article={article} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
