import React from 'react';
import './Money.scss';

const Money = ({money}) => {
  return (
    <div className="money">
      <p>{money}</p>
    </div>
  )
}

export default Money
