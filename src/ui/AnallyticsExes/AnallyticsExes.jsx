import React from 'react';
import './AnallyticsExes.scss';

export const AnallyticsExes = ({title, img}) => {
  return (
    <div className="anallytics-exes">
      <div className="anallytics-exes__percent">
        <img src={img} alt="" />
      </div>
      <div className="anallytics-exes__wrapp">
          <p className="anallytics-exes__title">{title}</p>
          <div className="anallytics-exes__column"></div>
      </div>
    </div>
  )
}
