import './App.scss';
import Anallytics from './components/Anallytics/Anallytics';
import Header from './components/Header/Header';
import Income from './components/Income/Income';
import Left from './components/LeftContent/Left';
import MyCard from './components/MyCard/MyCard';
import Outlay from './components/Outlay/Outlay';
import Total from './components/Total/Total';
import Transactions from './components/Transactions/Transactions';

const App = () => {
  return (
    <div className="App">
      <Left />
      <div className="App__main">
        <Header />
        <div className="App__wrap">
          <Total />  
          <MyCard />
          <Outlay />
          <div className="App__anallytics">
             <Anallytics />
          </div>  
        </div>
        <div className="App__bottom">
          <Income />
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default App;
