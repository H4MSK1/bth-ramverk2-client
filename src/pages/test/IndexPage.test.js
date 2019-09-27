import React from 'react';
import { mount } from 'enzyme';
import { DefaultContainer } from 'layouts/DefaultContainer';

import IndexPage from 'pages/IndexPage';

describe('<IndexPage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<IndexPage />);
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
