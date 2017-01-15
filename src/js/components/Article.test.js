/* eslint-disable no-undef */

import React from 'react'
import renderer from 'react-test-renderer'

import Article from './Article'

const exampleArticle = {
  id: 1,
  url: 'http://www.nature.com/news/ancient-retroviruses-emerged-half-a-billion-years-ago-1.21274'
}

test('Article renders correctly', () => {
  const tree = renderer.create(
    <Article article={exampleArticle} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
