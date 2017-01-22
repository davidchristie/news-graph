/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Join } from './Join'

test('Join renders correctly', () => {
  const dispatch = () => {}
  const wrapper = shallow(<Join dispatch={dispatch} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
