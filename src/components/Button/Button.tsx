import React, { FC } from 'react';

import './Button.css';

interface Props {
	className?: string;
}

export const Button: FC<Props> = (props) => {
	const { className = '' } = props;

	return <div>Button</div>;
};
