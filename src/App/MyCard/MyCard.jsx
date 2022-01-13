import React from 'react';
import './MyCard.scss';

import more from './images/more.svg';
import VisaCard from './VisaCard/VisaCard';

const MyCard = () => {
  return (
    <div className="mycard">
      <div className="mycard__top">
        <h4 className="main-title">My Card</h4>
        <svg className="mycard__more-btn">
          <use xlinkHref={more + "#more"}/>
        </svg>
      </div>
      <VisaCard />
    </div>
  )
}

export default MyCard
