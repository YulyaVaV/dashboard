import React from 'react';
import './Anallytics.scss';
import Exes from './component/Exes';

import arrow from './images/arrow.svg';

import stairs from './images/stairs.png';
// import footing from './images/footing.png'
import elect from './images/elect.png';
import framin from './images/framin.png';
import finish from './images/finish.png';
import hard from './images/hard.png';
import fram from './images/fram.png';
import tile from './images/tile.png';
import roofin from './images/roofin.png';
import apli from './images/apli.png';
import insul from './images/insul.png';

const exes = [
{
  title: 'Stairs',
  img: stairs,
},
{
  title: 'Footings',
  img: stairs,
},
{
  title: 'Electrical',
  img: elect,
},
{
  title: 'Framing Material',
  img: framin,
},
{
  title: 'Finish Labor',
  img: finish,
},
{
  title: 'Hardware',
  img: hard,
},
{
  title: 'Framing',
  img: fram,
},
{
  title: 'Tile Installation',
  img: tile,
},
{
  title: 'Roofing',
  img: roofin,
},
{
  title: 'Apliances Install',
  img: apli,
},
{
  title: 'Insulation',
  img: insul,
},
{
  title: 'Interior Painting',
  img: insul,
},
]

const Anallytics = () => {
  return (
    <div className="anallytics">
      <div className="anallytics__top">
      <h4 className="mainTitle">Anallytics</h4>
        <div className="anallytics__top--input">
          <p className="anallytics__top--select">Last Month</p>
          <svg className="anallytics__top--arrow">
            <use xlinkHref={arrow + "#arrow"}/>
          </svg>
        </div>
      </div>

      <div className="anallytics__exes">
        {
          exes.map(item => (
            <Exes
              title={item.title}
              img={item.img}
            />
          ))
        }
      </div>

      <div className="anallytics__bottom">
        <p className="anallytics__bottom--total">Total</p>
        <p className="anallytics__bottom--price">$17,355</p>
      </div>
    </div>
  )
}

export default Anallytics
