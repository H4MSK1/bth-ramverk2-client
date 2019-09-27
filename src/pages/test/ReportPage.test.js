import React from 'react';
import { mount } from 'enzyme';
import { DefaultContainer } from 'layouts/DefaultContainer';

import ReportPage from 'pages/ReportPage';

describe('<ReportPage />', () => {
  let wrapper;
  const props = {
    history: {},
    match: { params: {} },
  };

  beforeEach(() => {
    wrapper = mount(<ReportPage {...props} />);
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
