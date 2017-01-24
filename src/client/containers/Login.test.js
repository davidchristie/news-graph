/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Login } from './Login'

test('Login renders correctly', () => {
  const wrapper = shallow(<Login />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
