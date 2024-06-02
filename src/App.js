import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setfromCurrency] = useState("USD");
  const [toCurrency, setTocurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const[exchngeRate,setExchangerate]=useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        // console.log(res);
        setExchangerate(res.data.rates[toCurrency])
      } catch (error) {
        console.error("Error Fetching exchange rate:", error);
      }
    };
    getExchangeRate();
  }, [fromCurrency,toCurrency]); // Add fromCurrency as a dependency to the useEffect hook

  useEffect(()=>{
    if(exchngeRate!==null){
      setConvertedAmount((amount*exchngeRate).toFixed(2));
    }

  },[amount,exchngeRate])
  const handleamtchange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handlefrom = (e) => {
    setfromCurrency(e.target.value);
  };

  const handleto = (e) => {
    setTocurrency(e.target.value);
  };

  return (
    <>
      <div className='currency-container'>
        <div className='box'></div>
        <div className='data'>
          <h1>Currency Converter</h1>
          <div className='input-container'>
            <label htmlFor='amt'>Amount:</label>
            <input type="number" id="amt" value={amount} onChange={handleamtchange}></input>
          </div>
          <div className='input-container'>
            <label htmlFor='fromcurrency'>From Currency</label>
            <select id="fromCurrency" value={fromCurrency} onChange={handlefrom}>
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
            <select id="ToCurrency" value={toCurrency} onChange={handleto}>
              <option value="USD">USD-United States Dollar</option>
              <option value="EUR">EUR-EUR</option>
              <option value="GBP">GBP-British Pound Sterling</option>
              <option value="JPY">JPY-Japanese Yen</option>
              <option value="INR">INR-Indian Rupee</option>
              <option value="CNY">CNY-Chinese Yuvan</option>
            </select>
          </div>
          <div className='result'>
            <p>{amount}  {fromCurrency} is equal to {toCurrency}   {convertedAmount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
