import React from 'react';
import './MenuItem.scss';

const MenuItem = ({img, title, style, background, border, color}) => {
  return (
    <a href="/" className="menu-item" color={border} style={background}>
      <svg className="menu-item__images">
          <use xlinkHref={img + "#dashboard"}/>
          <use xlinkHref={img + "#users"}/>
          <use xlinkHref={img + "#messages"}/>
          <use xlinkHref={img + "#transactions"}/>
          <use xlinkHref={img + "#wallet"}/>
          <use xlinkHref={img + "#dollar"}/>
          <use xlinkHref={img + "#investment"}/>
          <use xlinkHref={img + "#file"}/>
          <use xlinkHref={img + "#settings"}/>
          <use xlinkHref={img + "#support"}/>
          <use xlinkHref={img + "#logout"}/>
        </svg>
      <p className="menu-item__title">{title}</p>
    </a>
  )
}

export default MenuItem
