import React from 'react';
import './CashPoint.scss';

const CashPoint = () => {
  return (
    <div className="cash-point">
      <div className="cash-point__point">
        <div className="cash-point__bullet"></div>
        <div className="cash-point__gradient"></div>
      </div>
      <div className="cash-point__price">$2710</div>
      <div className="cash-point__piece"></div>
      <div className="cash-point__round">
        <div className="cash-point__bullet"></div>
        <div className="cash-point__gradient"></div>
      </div>
    </div>
  )
}

export default CashPoint
