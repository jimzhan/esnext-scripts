import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders <App /> component', () => {
    const wrapper = shallow(<App>Application</App>);
    expect(wrapper).toBeTruthy();
  });
});
