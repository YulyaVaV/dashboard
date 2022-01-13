import React from 'react';
import './Total.scss';

import Card from '../../ui/CardTotal/CardTotal';

import {total} from './total-data';

const Total = () => {
  return (
    <div className="total">
      {
        total.map(item => (
          <Card
            title={item.title}
            more={item.more}
            price={item.price}
            arrow={item.arrow}
            percent={item.percent}
            color={item.color}
            style={item.style}
            line={item.line}
            graph={item.graph}
          />
        ))
      }
    </div>
  )
}

export default Total
