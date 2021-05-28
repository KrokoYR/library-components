import React from 'react';
import { mount, shallow } from 'enzyme';

import { Dropdown } from '.';


describe('Dropdown', () => {
  test('rendering', () => {
    const wrapper = mountWithTheme(<Dropdown />);
    expect(wrapper).toMatchSnapshot();
  });

  test('prop className', () => {
    const className = 'Dropdown';
    const wrapper = shallowWithTheme(<Dropdown className={className} />);
    expect(wrapper.find(Dropdown).hasClass(className)).toBe(true);
  });
});
