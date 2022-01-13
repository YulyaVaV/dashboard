import line from './images/line.svg';
import more from './images/more.svg';
import red from './images/red.png';
import pink from './images/pink.png';
import violet from './images/violet.png';
import greenarrow from './images/greenarrow.svg';
import redarrow from './images/redarrow.svg';

export const total = [{
  title:'Total Balance',
  more: more,
  price: '$ 19,750',
  arrow: greenarrow,
  percent: '11.94%',
  color: {color: '#34E4B5'},
  style:{color: "#34E4B5"},
  line: line,
  graph: violet,
},
{
  title:'Total Expence',
  more: more,
  price: '$ 11,375',
  arrow: redarrow,
  percent: '19.91%',
  color: {color: '#E03A45'},
  style:{color: "#E03A45"},
  line: line,
  graph: pink,
},
{
  title:'Total Savings',
  more: more,
  price: '$ 8400',
  arrow: greenarrow,
  percent: '21.17%',
  color: {color: '#34E4B5'},
  style:{color: "#34E4B5"},
  line: line,
  graph: red,
},
]