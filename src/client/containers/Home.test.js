/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import articles from '../examples/articles'
import { Home } from './Home'

test('Home renders correctly', () => {
  const wrapper = shallow(<Home articles={articles} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
