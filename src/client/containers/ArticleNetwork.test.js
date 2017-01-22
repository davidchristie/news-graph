/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { ArticleNetwork } from './ArticleNetwork'

const articles = []
const connections = []

test('ArticleNetwork renders correctly', () => {
  const wrapper = shallow(<ArticleNetwork articles={articles} connections={connections} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
