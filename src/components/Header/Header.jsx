import React from 'react';
import './Header.scss';

import sun from './images/sun.svg';
import search from './images/search.svg';
import bell from './images/bell.svg';
import person from './images/person.svg';
import arrow from './images/arrow.svg';


const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <p className="header__congrats">Hello, Drax</p>
        <div className="header__info">
          <div className="header__images">
            <svg className="header__image">
              <use xlinkHref={sun + "#sun"}/>
            </svg>
            <svg className="header__image">
              <use xlinkHref={search + "#search"}/>
            </svg>
            <svg className="header__image">
              <use xlinkHref={bell + "#bell"}/>
            </svg>
            <div className="header__image--round"></div>
            <img src={person} alt="" />
          </div>

         <div className="header__person">
          <p className="header__person--name">Darsh A...</p>
          <svg className="header__image">
            <use xlinkHref={arrow + "#arrow"}/>
          </svg>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Header
