import React from 'react';
import './Months.scss';

const Months = ({months, img}) => {
  return (
    <div className="months">
      <div className="months__img">
        <img src={img} alt="" />
      </div>
      <p className="months__month">{months}</p>
      <div className="months__column"></div>
    </div>
  )
}

export default Months
