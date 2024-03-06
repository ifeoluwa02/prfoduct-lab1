"use client"

import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const CurrencyConverter = ({ currencies }) => {
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [destinationCurrency, setDestinationCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [fxQuote, setFxQuote] = useState('');
  const [error, setError] = useState('');

  const convertCurrency = async () => {
    try {
      const response = await axios.get(`/api/convert?source=${sourceCurrency}&destination=${destinationCurrency}&amount=${amount}`);
      setConvertedAmount(response.data.convertedAmount);
      setFxQuote(response.data.fxQuote);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className='px-2 flex flex-col justify-center items-center'>
      <select value={sourceCurrency} onChange={(e) => setSourceCurrency(e.target.value)}>
        <option value="">Select Source Currency</option>
        {Object.keys(currencies).map(currency => (
          <option key={currency} value={currency}>{currencies[currency]}</option>
        ))}
      </select>

      <input type="text" value={destinationCurrency} onChange={(e) => setDestinationCurrency(e.target.value)} placeholder="Destination Currency" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button onClick={convertCurrency}>Convert</button>
      {error && <p>Error: {error}</p>}
      {convertedAmount && <p>Converted Amount: {convertedAmount}</p>}
      {fxQuote && <p>FX Quote: {fxQuote}</p>}
    </div>
  );
};

const Home = () => {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://openexchangerates.org/api/currencies.json');
        setCurrencies(response.data);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  return <CurrencyConverter currencies={currencies} />;
};

export default function Home() {
  // return <CurrencyConverter />;
}
