import React from 'react';
import { mount, shallow } from 'enzyme';

import { Button } from '.';

describe('Button', () => {
	test('rendering', () => {
		const wrapper = mount(<Button />);
		expect(wrapper).toMatchSnapshot();
	});

	test('prop className', () => {
		const className = 'Button';
		const wrapper = shallow(<Button className={className} />);
		expect(wrapper.find(Button).hasClass(className)).toBe(true);
	});
});
