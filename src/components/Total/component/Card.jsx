import React from 'react';
import './Card.scss';

const Card = ({title, more, price, arrow, percent, color, style, line, graph, red}) => {
  return (
    <div className="card">
      <div className="card__top">
        <h5 className="card__top--title">{title}</h5>

        <svg className="card__top--more">
          <use xlinkHref={more + "#more"}/>
        </svg>
      </div>

      <p className="card__price">{price}</p>

      <div className="card__bottom">
        <div className="card__percent">
          <svg className="card__arrow">
            <use xlinkHref={arrow + "#redarrow"}/>
            <use xlinkHref={arrow + "#greenarrow"}/>
          </svg>
          <div className="card__percent--numbs" style={color}>{percent}</div>
        </div>
        <div className="card__graphic">
          <svg className="card__line">
            <use xlinkHref={line + "#line"}/>
          </svg>
          <img src={graph} alt=""  className="card__graph"/>
        </div>
      </div>
    </div>
  )
}

export default Card
