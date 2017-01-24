/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Alert from './Alert'

const text = 'Text'
const type = 'info'

test('Alert renders correctly', () => {
  const wrapper = shallow(<Alert text={text} type={type} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
