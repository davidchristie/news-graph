/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Alerts from './Alerts'

const alerts = [
  {
    text: 'Text',
    type: 'info'
  }
]

test('Alerts renders correctly', () => {
  const wrapper = shallow(<Alerts alerts={alerts} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
