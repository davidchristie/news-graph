/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import ArticleCards from './ArticleCards'

const exampleArticles = [
  {
    id: 1,
    url: 'http://www.nature.com/news/ancient-retroviruses-emerged-half-a-billion-years-ago-1.21274'
  },
  {
    id: 2,
    url: 'https://www.theguardian.com/world/2017/jan/11/chamber-of-rats-mexico-parliaments-name-changed-in-google-maps-prank'
  },
  {
    id: 3,
    url: 'https://vimeo.com/192574852'
  },
  {
    id: 4,
    url: 'http://www.aljazeera.com/indepth/features/2017/01/india-love-hand-books-170108073151216.html'
  }
]

test('ArticleCards renders correctly', () => {
  const tree = renderer.create(
    <ArticleCards articles={exampleArticles} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
