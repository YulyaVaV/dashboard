import React from 'react';
import './LatestTransactions.scss';

const LatestTransactions = ({text, cash, color}) => {
  return (
    <div className="latest-transactions">
      <p className="latest-transactions__title">{text}</p>
      <p className="latest-transactions__cash" style={color}>{cash}</p>
    </div>
  )
}

export default LatestTransactions
