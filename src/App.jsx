import './App.scss';
import Anallytics from './App/Anallytics/Anallytics';
import Header from './App/Header/Header';
import Income from './App/Income/Income';
import Left from './App/NavList/NavList';
import MyCard from './App/MyCard/MyCard';
import Outlay from './App/Outlay/Outlay';
import Total from './App/Total/Total';
import Transactions from './App/Transactions/Transactions';

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
