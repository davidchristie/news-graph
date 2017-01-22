/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Jumbotron from './Jumbotron'

const title = 'Title'

test('Jumbotron renders correctly', () => {
  const wrapper = shallow(<Jumbotron title={title} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
