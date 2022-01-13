import React from 'react';
import './Anallytics.scss';
import {AnallyticsExes} from '../../ui/AnallyticsExes/AnallyticsExes';

import { data } from './data.jsx';
import DataSelect from '../../ui/DataSelect/DataSelect';

const Anallytics = () => {
  return (
    <div className="anallytics">
      <div className="anallytics__top">
      <h4 className="main-title">Anallytics</h4>
        <DataSelect
          value="Last Month"
        />
      </div>
      <div className="anallytics__exes">
        {
          data.map(item => (
            <AnallyticsExes
              title={item.title}
              img={item.img}
            />
          ))
        }
      </div>
      <div className="anallytics__bottom">
        <p className="anallytics__bottom anallytics__bottom--total">Total</p>
        <p className="anallytics__bottom anallytics__bottom--price">$17,355</p>
      </div>
    </div>
  )
}

export default Anallytics
