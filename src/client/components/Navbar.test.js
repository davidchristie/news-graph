/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Navbar from './Navbar'

test('Navbar renders correctly', () => {
  const wrapper = shallow(<Navbar />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
