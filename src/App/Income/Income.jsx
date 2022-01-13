import React from 'react';
import './Income.scss';

import arrow from './images/arrow.svg';
import Price from './component/Price/Price';
import Months from './component/Months/Months';

import { months, price} from './component/month-data';
import DataSelect from '../../ui/DataSelect/DataSelect';

const Income = () => {
  return (
    <div className="income">
      <div className="income__top">
        <h4 className="main-title">Income</h4>
        <DataSelect
          value="Last Year"
        />
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
