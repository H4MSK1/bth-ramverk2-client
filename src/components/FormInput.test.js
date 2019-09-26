import React from 'react';
import { mount } from 'enzyme';
import { FormGroup, Label, Input } from 'reactstrap';

import FormInput from './FormInput';

describe('<FormInput />', () => {
  let wrapper;
  const props = {
    name: 'name',
    label: 'label',
    type: 'text',
    error: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(<FormInput {...props} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders one <FormGroup />', () => {
    expect(wrapper.find(FormGroup).length).toBe(1);
  });

  it('renders one <Input />', () => {
    expect(wrapper.find(Input).length).toBe(1);
  });

  it('renders one <Label />', () => {
    expect(wrapper.find(Label).length).toBe(1);
  });
});
