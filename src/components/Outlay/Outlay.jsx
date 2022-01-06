import React from 'react';
import './Outlay.scss';

import arrow from './images/arrow.svg';
import Numbers from './component/Numbers/Numbers';
import Money from './component/Money/Money';
import redvector from './images/redvector.png';
import violetvector from './images/violetvector.png';

const money = [
{
  money: '$4000',
},
{
  money: '$3000',
},
{
  money: '$2000',
},
{
  money: '$1000',
},
{
  money: '$0',
},
]

const number = [
  {
    number: 1,
  },
  {
    number: 5,
  },
  {
    number: 10,
  },
  {
    number: 15,
  },
  {
    number: 20,
  },
  {
    number: 25,
  },
  {
    number: 30,
  },
]

const Outlay = () => {
  return (
    <div className="outlay">

      <div className="outlay__top">
        <h4 className="mainTitle">Outlay</h4>
        <div className="outlay__select">
          <div className="outlay__select--previous">
            <div className="outlay__select--bullet"></div>
            <p>Previous month</p>
          </div>
          <div className="outlay__select--selected">
            <div className="outlay__select--bullet-red"></div>
            <p>Selected month</p>
          </div>
          <div className="outlay__select--month">
            <p>Appril 2021</p>
            <svg className="outlay__select--arrow">
              <use xlinkHref={arrow + "#arrow"}/>
            </svg>
          </div>
        </div>
      </div>

    <div className="outlay__wrapp">
      <div className="outlay__money">
        {
          money.map(item => (
            <Money
              money={item.money}
            />
          ))
        }
      </div>
      <div className="outlay__graphs">
         <img src={violetvector} alt="" className="outlay__violetvector"/>
         <img src={redvector} alt="" className="outlay__redvector"/>
         <div className="outlay__dashed"></div>
         <div className="outlay__one"></div>
         <div className="outlay__two"></div>
      </div>
    </div>

    <div>
      <div className="outlay__point">
        <div className="outlay__point--bullet"></div>
        <div className="outlay__point--gradient"></div>
      </div>
      <div className="outlay__point--price">$2710</div>
      <div className="outlay__point--piece"></div>

      <div className="outlay__point--first">
        <div className="outlay__point--bullet"></div>
        <div className="outlay__point--gradient"></div>
      </div>
    </div>

      

      <div className="outlay__numbers">
        {
          number.map(item => (
            <Numbers
            number={item.number}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Outlay
