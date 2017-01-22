/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Layout from './Layout'

test('Layout renders correctly', () => {
  const wrapper = shallow(<Layout />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
