/* eslint-disable no-undef */

import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const initialState = {
  app: {
    articles: [
      {
        id: 1,
        url: 'http://www.nature.com/news/ancient-retroviruses-emerged-half-a-billion-years-ago-1.21274'
      },
      {
        id: 2,
        url: 'https://www.theguardian.com/world/2017/jan/11/chamber-of-rats-mexico-parliaments-name-changed-in-google-maps-prank'
      },
      {
        id: 3,
        url: 'https://vimeo.com/192574852'
      },
      {
        id: 4,
        url: 'http://www.aljazeera.com/indepth/features/2017/01/india-love-hand-books-170108073151216.html'
      }
    ]
  }
}
const store = configureStore()(initialState)

import Home from './Home'

test('Home renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
