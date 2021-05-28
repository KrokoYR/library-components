import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProductCard } from '.';
import { IProductCard } from './ProductCard';

export default {
	title: 'ProductCard',
	component: ProductCard,
	argTypes: {
		className: {
			control: {
				type: 'text',
			},
		},
		id: {
			control: {
				type: 'number',
			},
		},
		label: {
			control: {
				type: 'text',
			},
		},
		imgSrc: {
			control: {
				type: 'text',
			},
		},
		title: {
			control: {
				type: 'text',
			},
		},
		description: {
			control: {
				type: 'text',
			},
		},
		price: {
			control: {
				type: 'number',
			},
		},
	},
} as Meta;

export const Default: Story<IProductCard> = ({ ...args }) => (
	<ProductCard {...args} />
);
