import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import ReactButton from './Button';

const props = {
  text: 'Hello',
  onClick: jest.fn()
};

describe('Test Suites button', () => {
  let component: ReactTestRenderer;
  beforeAll(() => {
    component = renderer.create(<ReactButton {...props} />);
  });

  afterAll(() => {
    jest.clearAllMocks();
    component.unmount();
  });

  it('Render component', () => {
    expect(component).toBeTruthy();
  });

  it('Check props', () => {
    expect(component.root.props).toEqual(props);
  });
});
