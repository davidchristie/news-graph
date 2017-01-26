/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import articles from '../examples/articles'
import { ArticlePage } from './ArticlePage'

test('ArticlePage renders correctly', () => {
  const query = {url: articles[0].url}
  const wrapper = shallow(<ArticlePage articles={articles} query={query} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
