import React from 'react';
import { mount, shallow } from 'enzyme';

import { ProductCard } from '.';

describe('ProductCard', () => {
	test('rendering', () => {
		const wrapper = mount(<ProductCard />);
		expect(wrapper).toMatchSnapshot();
	});

	test('prop className', () => {
		const className = 'ProductCard';
		const wrapper = shallow(<ProductCard className={className} />);
		expect(wrapper.find(ProductCard).hasClass(className)).toBe(true);
	});
});
