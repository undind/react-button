import React from 'react';
import { mount, CommonWrapper } from 'enzyme';
import ReactButton from './Button';

const props = {
  text: 'Hello',
  onClick: jest.fn()
};

describe('Test Suites button', () => {
  let wrapper: CommonWrapper;
  beforeEach(() => {
    wrapper = mount(<ReactButton {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render my component', () => {
    expect(wrapper).toBeTruthy();
  });

  it('test sadas', () => {
    expect(wrapper).toBeTruthy();
  });
});
