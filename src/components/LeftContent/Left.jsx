import React from 'react';
import './Left.scss';
import Menu from './component/Menu/Menu';

import dashboard from './images/dashboard.svg';
import users from './images/users.svg';
import messages from './images/message.svg';
import transaction from './images/transaction.svg';
import wallet from './images/wallet.svg';
import dollar from './images/dollar.svg';
import investment from './images/investment.svg';
import file from './images/file.svg';
import settings from './images/settings.svg';
import support from './images/support.svg';
import logout from './images/logout.svg';

const data = [{
  img: dashboard,
  title: 'Daseboard',
  style: {color: "#1D1E2C"},
  background: {backgroundColor: "#1D1E2C"}
},
{
  img: users,
  title: 'User profiles',
},
{
  img: messages,
  title: 'Messages',
},
{
  img: transaction,
  title: 'Transactions',
},
{
  img: wallet,
  title: 'My wallet',
},
{
  img: dollar,
  title: 'Payment',
},
{
  img: investment,
  title: 'Investment',
},
{
  img: file,
  title: 'Reports',
  color: {color: "#1D1E2C"},
  border: {borderBottom: "5px solid #1D1E2C"}
},
{
  img: settings,
  title: 'Settings',
},
{
  img: support,
  title: 'Support',
},
{
  img: logout,
  title: 'Log out',
},
]

const Left = () => {
  return (
    <div className="left">
      <h3 className="left__title">Your Logo</h3>
      <div className="left__menu">
      {
          data.map(item => (
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

export default Left;
