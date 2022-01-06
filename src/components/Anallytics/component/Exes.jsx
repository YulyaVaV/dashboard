import React from 'react';
import './Exes.scss';

const Exes = ({title, img}) => {
  return (
    <div className="exes">
      <div className="exes__percent">
        <img src={img} alt="" />
      </div>
      <div className="exes__wrapp">
          <p className="exes__title">{title}</p>
          <div className="exes__column"></div>
      </div>

    </div>
  )
}

export default Exes
