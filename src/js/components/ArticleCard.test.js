/* eslint-disable no-undef */

import React from 'react'
import renderer from 'react-test-renderer'

import ArticleCard from './ArticleCard'

const exampleArticle = {
  id: 1,
  url: 'http://www.nature.com/news/ancient-retroviruses-emerged-half-a-billion-years-ago-1.21274'
}

test('ArticleCard renders correctly', () => {
  const tree = renderer.create(
    <ArticleCard article={exampleArticle} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
