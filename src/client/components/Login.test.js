/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Login from './Login'

const onSubmit = () => {}

test('Login renders correctly', () => {
  const wrapper = shallow(<Login onSubmit={onSubmit} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
