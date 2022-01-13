import React from 'react';
import './OutlayGraph.scss';

import redvector from '../../images/redvector.png';
import violetvector from '../../images/violetvector.png';

const OutlayGraph = () => {
  return (
    <div className="outlay-graph">
      <div className="outlay-graph__graphs">
        <img src={violetvector} alt="" className="outlay-graph__violetvector"/>
        <img src={redvector} alt="" className="outlay-graph__redvector"/>
        <div className="outlay-graph__dashed-line1"></div>
        <div className="outlay-graph__dashed-line2"></div>
        <div className="outlay-graph__dashed-line3"></div>
      </div>
    </div>
  )
}

export default OutlayGraph
