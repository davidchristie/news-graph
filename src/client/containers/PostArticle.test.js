/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { PostArticle } from './PostArticle'

test('PostArticle renders correctly', () => {
  const dispatch = () => {}
  const token = 'xxxx.xxxx.xxxx'
  const wrapper = shallow(<PostArticle dispatch={dispatch} token={token} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
