/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import About from './About'

test('About renders correctly', () => {
  const wrapper = shallow(<About />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
