import React from 'react';
import './Transactions.scss';

import more from './images/more.svg';
import Costs from './component/Costs';

const transaction = [
{
  text: 'Refueling gasoline',
  cash: '-$201.34',
  color: {color: '#E03A45'},
},
{
  text: 'Purchase of furniture',
  cash: '-$567.14',
  color: {color: '#E03A45'},
  
},
{
  text: 'Cash refund for tickets',
  cash: '+$568.11',
  color: {color: '#34E4B5'},
},
]

const Transactions = () => {
  return (
    <div className="transactions">
      <div className="transactions__top">
        <h4 className="mainTitle">Latest Transactions</h4>
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
