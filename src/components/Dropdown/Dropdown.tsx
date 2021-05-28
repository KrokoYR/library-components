import React, { FC } from 'react';

import './Dropdown.css'

interface Props {
  className?: string;
}

export const Dropdown: FC<Props> = props => {
  const { className = '' } = props;

  return (
    <div>
      Dropdown
    </div>
  )
};
