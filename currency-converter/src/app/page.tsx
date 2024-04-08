"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { convertCurrency } from './utils/api';

const Page = ({ currencies }: any) => {
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [curriencies, setCurrencies] = useState({});
  const [destinationCurrency, setDestinationCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [fxQuote, setFxQuote] = useState('');
  const [error, setError] = useState('');

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get('https://openexchangerates.org/api/currencies.json');
      setCurrencies(response.data);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const handleConvertCurrency = async () => {
    try {
      const response = await convertCurrency(sourceCurrency, destinationCurrency, amount);
      setConvertedAmount(response.convertedAmount);
      setFxQuote(response.fxQuote);
    } catch (error:any) {
            setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className='bg-red-800 flex items-center justify-center p-32 border border-solid border-black rounded'>
      <div className=' text-red-300 '>
        <select value={sourceCurrency} onChange={(e) => setSourceCurrency(e.target.value)}>
          <option value="">Select Source Currency</option>
          {/* {Object.keys(currencies).map(currency => (
            <option key={currency} value={currency}>{currencies[currency]}</option>
          ))} */}
        </select>
        <input type="text" value={destinationCurrency} onChange={(e) => setDestinationCurrency(e.target.value)} placeholder="Destination Currency" />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <button onClick={handleConvertCurrency}>Convert</button>
        {error && <p>Error: {error}</p>}
        {convertedAmount && <p>Converted Amount: {convertedAmount}</p>}
        {fxQuote && <p>FX Quote: {fxQuote}</p>}
      </div>
    </div>
  );
}

export default Page;
