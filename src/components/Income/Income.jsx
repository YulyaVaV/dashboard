import React from 'react';
import './Income.scss';

import arrow from './images/arrow.svg';
import Price from './component/Price/Price';
import Months from './component/Months/Months';

import jan from './images/jan.png';
import feb from './images/feb.png';
import mar from './images/mar.png';
import apr from './images/apr.png';
import may from './images/may.png';
import jun from './images/jun.png';
import jul from './images/jul.png';
import aug from './images/aug.png';
import sep from './images/sep.png';
import oct from './images/oct.png';
import nov from './images/nov.png';
import dec from './images/dec.png';

const price = [
{
  price: '$30,000',
},
{
  price: '$20,000',
},
{
  price: '$10,000',
},
{
  price: '$0',
},
]

const months = [
  {
    months: 'Jan',
    img: jan,
  },
  {
    months: 'Feb',
    img: feb,
  },
  {
    months: 'Mar',
    img: mar,
  },
  {
    months: 'Apr',
    img: apr,
  },
  {
    months: 'May',
    img: may,
  },
  {
    months: 'Jun',
    img: jun,
  },
  {
    months: 'Jul',
    img: jul,
  },
  {
    months: 'Aug',
    img: aug,
  },
  {
    months: 'Sep',
    img: sep,
  },
  {
    months: 'Oct',
    img: oct,
  },
  {
    months: 'Nov',
    img: nov,
  },
  {
    months: 'Dec',
    img: dec,
  },
]

const Income = () => {
  return (
    <div className="income">
      <div className="income__top">
        <h4 className="mainTitle">Income</h4>
        <div className="income__top--input">
          <p className="income__top--select">Last Year</p>
          <svg className="income__top--arrow">
            <use xlinkHref={arrow + "#arrow"}/>
          </svg>
        </div>
      </div>

      <div className="income__wrapp">
        <div className="income__price">
          {
            price.map(item => (
              <Price
                price={item.price}
              />
            ))
          }
        </div>
        <div className="income__months">
          {
            months.map(item => (
              <Months
                months={item.months}
                img={item.img}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Income
