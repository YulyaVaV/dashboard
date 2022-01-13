import React from 'react';
import './NavList.scss';
import Menu from '../../ui/MenuItem/MenuItem';

import { list } from './list';

const NavList = () => {
  return (
    <div className="nav-list">
      <h3 className="nav-list__title">Your Logo</h3>
      <div className="nav-list__menu">
      {
          list.map(item => (
            <Menu
              img={item.img}
              title={item.title}
              background={item.background}
              style={item.style}
              border={item.border}
              color={item.color}
            />
          ))
        }
      </div>
    </div>
  )
}

export default NavList;
