/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Logout from './Logout'

const onClick = () => {}

test('Logout renders correctly', () => {
  const wrapper = shallow(<Logout onClick={onClick} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
