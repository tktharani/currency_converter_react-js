import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='currency-container'>
      <div className='box'></div>
      <div className='data'>
        <h1>Currency Converter</h1>
        <div className='input-container'>
          <label htmlFor='amt'>Amount:</label>
          <input type="number" id="amt"></input>
        </div>
        <div className='input-container'>
          <label htmlFor='fromcurrency'>From Currency</label>
          <select id="fromCurrency">
              <option value="USD">USD-United States Dollar</option>
              <option value="EUR">EUR-EUR</option>
              <option value="GBP">GBP-British Pound Sterling</option>
              <option value="JPY">JPY-Japanese Yen</option>
              <option value="INR">INR-Indian Rupee</option>
              <option value="CNY">CNY-Chinese Yuvan</option>
          </select>
        </div>
        <div className='input-container'>
          <label htmlFor='Tocurrency'>To Currency</label>
          <select id="ToCurrency">
              <option value="USD">USD-United States Dollar</option>
              <option value="EUR">EUR-EUR</option>
              <option value="GBP">GBP-British Pound Sterling</option>
              <option value="JPY">JPY-Japanese Yen</option>
              <option value="INR">INR-Indian Rupee</option>
              <option value="CNY">CNY-Chinese Yuvan</option>
          </select>
        </div>
        <div className='result'>
          <p>1 INR is equai to 83.25USD</p> 
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
