import React from 'react';
import { mount, shallow } from 'enzyme';

import { Input } from '.';


describe('Input', () => {
  test('rendering', () => {
    const wrapper = mountWithTheme(<Input />);
    expect(wrapper).toMatchSnapshot();
  });

  test('prop className', () => {
    const className = 'Input';
    const wrapper = shallowWithTheme(<Input className={className} />);
    expect(wrapper.find(Input).hasClass(className)).toBe(true);
  });
});
