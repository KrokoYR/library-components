import React from 'react';
import { mount, shallow } from 'enzyme';

import { Popup } from '.';


describe('Popup', () => {
  test('rendering', () => {
    const wrapper = mountWithTheme(<Popup />);
    expect(wrapper).toMatchSnapshot();
  });

  test('prop className', () => {
    const className = 'Popup';
    const wrapper = shallowWithTheme(<Popup className={className} />);
    expect(wrapper.find(Popup).hasClass(className)).toBe(true);
  });
});
