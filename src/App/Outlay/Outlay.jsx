import React from 'react';
import './Outlay.scss';

import Numbers from './component/Numbers/Numbers';
import Money from './component/Money/Money';
import OutlayGraph from './component/OutlayGraph/OutlayGraph';
import CashPoint from './component/CashPoint/CashPoint';

import {money, number} from './component/number-data';
import DataSelect from '../../ui/DataSelect/DataSelect';

const Outlay = () => {
  return (
    <div className="outlay">

      <div className="outlay__top">
        <h4 className="main-title">Outlay</h4>
        <div className="outlay__select">
          <div className="outlay__previous">
            <div className="outlay__previous-bullet"></div>
            <p>Previous month</p>
          </div>
          <div className="outlay__selected">
            <div className="outlay__selected-bullet"></div>
            <p>Selected month</p>
          </div>
            <DataSelect
              value='Appril 2021'
            />
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
       <OutlayGraph />
      </div>
      <CashPoint />
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
