import React from 'react';
import './VisaCard.scss';

import icon from '../images/icon.svg';
import graphred from '../images/graphred.png';
import graphviolet from '../images/graphviolet.png';
import visa from '../images/visa.svg';

const VisaCard = () => {
  return (
    <div className="visa-card">
      <div className="visa-card__top">
          <h5 className="visa-card__current">Current Balance</h5>
          <svg className="visa-card__chip">
          <use xlinkHref={icon + "#icon"}/>
        </svg>
      </div>
      <h3 className="visa-card__price">$19,750</h3>
      <div className="visa-card__wrapp">
        <div className="visa-card__numbers">
          <div className="visa-card__number">2357 1689 6251 0380</div>
          <div className="visa-card__term">06 / 2024</div>
        </div>
        <svg className="visa-card__logo">
          <use xlinkHref={visa + "#visa"}/>
        </svg>
        </div>
      <div className="visa-card__graphs">
        <img src={graphred} alt="" className="visa-card__violet"/>
        <img src={graphviolet} alt="" className="visa-card__red"/>
      </div>
    </div>
  )
}

export default VisaCard
