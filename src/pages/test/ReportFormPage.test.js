import React from 'react';
import { mount } from 'enzyme';
import { DefaultContainer } from 'layouts/DefaultContainer';

import ReportFormPage from 'pages/ReportFormPage';

describe('<ReportFormPage />', () => {
  let wrapper;
  const props = {
    history: {},
    match: { params: {} },
  };

  beforeEach(() => {
    wrapper = mount(<ReportFormPage {...props} />);
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

  it('renders without crashing when isEditing is true', () => {
    const wrapper2 = mount(
      <ReportFormPage {...props} match={{ params: { week: 1 } }} />,
    );
    expect(wrapper2.length).toBe(1);
    expect(wrapper2.find(DefaultContainer).length).toBe(1);
  });
});
