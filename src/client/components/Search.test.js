/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Search from './Search'

test('Search renders correctly', () => {
  const wrapper = shallow(<Search />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
