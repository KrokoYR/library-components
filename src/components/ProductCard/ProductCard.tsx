import React, { FC } from 'react';

import './ProductCard.css';

export interface IProductCard {
	className?: string;
	id: string | number;
	label: string;
	imgSrc: string;
	title: string;
	description: string;
	price: number;
	handleClick(): void;
}

export const ProductCard: FC<IProductCard> = (props) => {
	const {
		className = '',
		id,
		label,
		imgSrc,
		title,
		description,
		price,
		handleClick,
	} = props;

	return (
		<div
			className={`w-64 relative border-1/2 cursor-pointer ml-5 mb-5 hover:shadow-2xl ${className}`}
		>
			<img src={imgSrc} alt="" />
			<span className="absolute top-6 p-1 bg-green-300 text-xs text-white uppercase">
				{label}
			</span>
			<button type="button" className="absolute top-6 right-6">
				Heart
			</button>
			<div className="flex flex-col p-6">
				<h6 className="text-base font-semibold text-gray-600">
					{title}
				</h6>

				<p className="text-sm text-gray-600">{description}</p>

				<div className="mt-6 flex items-center justify-between">
					<p className="text-base font-semibold">{price} ₽</p>

					<button
						type="button"
						className="w-10 h-9 flex items-center justify-center"
						onClick={handleClick}
					>
						Shop
					</button>
				</div>
			</div>
		</div>
	);
};
