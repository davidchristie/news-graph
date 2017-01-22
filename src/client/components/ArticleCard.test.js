/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ArticleCard from './ArticleCard'
import article from '../examples/article'

test('ArticleCard renders correctly', () => {
  const wrapper = shallow(<ArticleCard article={article} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
