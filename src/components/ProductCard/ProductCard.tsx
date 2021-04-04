import React, { FC } from 'react';
// import { Link } from 'gatsby';

// import ShoppingBag from '../../assets/shopping-bag.svg';
// import HeartIcon from '../../assets/heart.svg';

import { Button } from '../Button';

interface Props {
	id: string | number;
	label: string;
	imgSrc: string;
	title: string;
	description: string;
	price: number;
}

export const ProductCard: FC<Props> = (props) => {
	const { id, label, imgSrc, title, description, price } = props;

	const handleClick = () => {
		console.log('Basket');
	};

	return (
		<a href={String(id)}>
			<div className="w-64 relative border-1/2 cursor-pointer ml-5 mb-5 hover:shadow-2xl">
				<img src={imgSrc} alt="" />
				<span className="absolute top-6 p-1 bg-green-300 text-xs text-white uppercase">
					{label}
				</span>
				<button type="button" className="absolute top-6 right-6">
					{/* <HeartIcon width={21} /> */}
				</button>
				<div className="flex flex-col p-6">
					<h6 className="text-base font-semibold text-gray-600">
						{title}
					</h6>

					<p className="text-sm text-gray-600">{description}</p>

					<div className="mt-6 flex items-center justify-between">
						<p className="text-base font-semibold">{price} ₽</p>

						{/* <Button
							className="w-10 h-9 flex items-center justify-center"
							onClick={handleClick}
						>
							<ShoppingBag width={24} />
						</Button> */}
					</div>
				</div>
			</div>
		</a>
	);
};
