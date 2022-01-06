import React from 'react';
import './MyCard.scss';

import more from './images/more.svg';
import icon from './images/icon.svg';
import graphred from './images/graphred.png';
import graphviolet from './images/graphviolet.png';
import visa from './images/visa.svg';

const MyCard = () => {
  return (
    <div className="mycard">

      <div className="mycard__top">
        <h4 className="mainTitle">My Card</h4>
        <svg className="mycard__top--more">
          <use xlinkHref={more + "#more"}/>
        </svg>
      </div>

      <div className="mycard__visa">
        <div className="mycard__visa--top">
           <h5 className="mycard__visa--current">Current Balance</h5>
           <svg className="mycard__visa--icon">
            <use xlinkHref={icon + "#icon"}/>
          </svg>
        </div>

        <h3 className="mycard__visa--price">$19,750</h3>
        
        <div className="mycard__visa--wrapp">
          <div className="mycard__visa--numbers">
            <div className="mycard__visa--number">2357 1689 6251 0380</div>
            <div className="mycard__visa--term">06 / 2024</div>
        </div>
          <svg className="mycard__visa--visa">
            <use xlinkHref={visa + "#visa"}/>
          </svg>
         </div>
        
        <div className="mycard__visa--graphs">
          <img src={graphred} alt="" className="mycard__visa--violet"/>
          <img src={graphviolet} alt="" className="mycard__visa--red"/>
        </div>
      </div>
    </div>
  )
}

export default MyCard
