import React from 'react';
import './Costs.scss';

const Costs = ({text, cash, color}) => {
  return (
    <div className="costs">
      <p className="costs__title">{text}</p>
      <p className="costs__cash" style={color}>{cash}</p>
    </div>
  )
}

export default Costs
