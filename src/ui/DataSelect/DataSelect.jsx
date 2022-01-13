import React from 'react';
import './DataSelect.scss';

import arrow from '../../App/Outlay/images/arrow.svg';

const DataSelect = ({value}) => {
  return (
    <div className="data-select">
      <div className="data-select__value">{value}</div>
      <svg className="data-select__arrow">
        <use xlinkHref={arrow + "#arrow"}/>
      </svg>
    </div>

  )
}

export default DataSelect
