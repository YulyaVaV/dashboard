import React from 'react';
import './CardTotal.scss';

const CardTotal = ({title, more, price, arrow, percent, color, line, graph}) => {
  return (
    <div className="card-total">
      <div className="card-total__top">
        <h5 className="card-total__top card-total__top--title">{title}</h5>

        <svg className="card-total__top card-total__top--more">
          <use xlinkHref={more + "#more"}/>
        </svg>
      </div>

      <p className="card-total__price">{price}</p>

      <div className="card-total__bottom">
        <div className="card-total__percent">
          <svg className="card-total__arrow">
            <use xlinkHref={arrow + "#redarrow"}/>
            <use xlinkHref={arrow + "#greenarrow"}/>
          </svg>
          <div className="card-total__percent card-total__percent--numbs" style={color}>{percent}</div>
        </div>
        <div className="card-total__graphic">
          <svg className="card-total__line">
            <use xlinkHref={line + "#line"}/>
          </svg>
          <img src={graph} alt=""  className="card-total__graph"/>
        </div>
      </div>
    </div>
  )
}

export default CardTotal