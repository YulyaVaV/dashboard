import React from 'react';
import './Transactions.scss';

import more from './images/more.svg';
import Costs from '../../ui/LatestTransactions/LatestTransactions';

import { transaction } from './transaction';

const Transactions = () => {
  return (
    <div className="transactions">
      <div className="transactions__top">
        <h4 className="main-title">Latest Transactions</h4>
        <svg className="transactions__top--more">
          <use xlinkHref={more + "#more"}/>
        </svg>
      </div>

      <div className="transaction__item">
        {
          transaction.map(item => (
            <Costs
              text={item.text}
              cash={item.cash}
              color={item.color}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Transactions
