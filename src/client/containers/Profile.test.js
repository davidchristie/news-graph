/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Profile } from './Profile'

const params = {id: '1'}

test('Profile renders correctly', () => {
  const wrapper = shallow(<Profile params={params} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
