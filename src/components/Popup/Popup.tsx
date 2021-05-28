import React, { FC } from 'react';

import './Popup.css'

interface Props {
  className?: string;
}

export const Popup: FC<Props> = props => {
  const { className = '' } = props;

  return (
    <div>
      Popup
    </div>
  )
};
