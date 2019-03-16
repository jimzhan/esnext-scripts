import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  it('renders <App /> components', () => {
    const wrapper = shallow(<App>App</App>)
    expect(wrapper).toBeTruthy()
  })
})
