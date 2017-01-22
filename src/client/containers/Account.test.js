/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Account } from './Account'

import profile from '../examples/profile'

test('Account renders correctly', () => {
  const wrapper = shallow(<Account profile={profile} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
