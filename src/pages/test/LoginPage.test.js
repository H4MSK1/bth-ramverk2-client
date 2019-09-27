import React from 'react';
import { mount } from 'enzyme';
import { DefaultContainer } from 'layouts/DefaultContainer';

import LoginPage from 'pages/LoginPage';

describe('<LoginPage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LoginPage />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('renders one <DefaultContainer />', () => {
    expect(wrapper.find(DefaultContainer).length).toBe(1);
  });
});
