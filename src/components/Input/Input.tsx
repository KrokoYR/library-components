import React, { FC, InputHTMLAttributes } from 'react';

import './Input.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export const Input: FC<Props> = (props) => {
	const { className = '' } = props;

	return <input autoComplete={undefined} type="text" />;
};
