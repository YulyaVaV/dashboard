import React from 'react';
import './Menu.scss';

const Menu = ({img, title, style, background, border, color}) => {
  return (
    <a href="/" className="menu" color={border} style={background}>
      <svg className="menu__images">
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
      <p className="menu__title">{title}</p>
    </a>
  )
}

export default Menu
