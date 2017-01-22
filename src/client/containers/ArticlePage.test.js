/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import articles from '../examples/articles'
import { ArticlePage } from './ArticlePage'

test('ArticlePage renders correctly', () => {
  const params = {id: '1'}
  const wrapper = shallow(<ArticlePage articles={articles} params={params} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
