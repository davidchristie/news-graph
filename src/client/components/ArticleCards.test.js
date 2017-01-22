/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ArticleCards from './ArticleCards'
import articles from '../examples/articles'

test('ArticleCards renders correctly', () => {
  const wrapper = shallow(<ArticleCards articles={articles} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
