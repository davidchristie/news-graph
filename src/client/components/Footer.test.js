/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Footer from './Footer'

test('Footer renders correctly', () => {
  const wrapper = shallow(<Footer />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
