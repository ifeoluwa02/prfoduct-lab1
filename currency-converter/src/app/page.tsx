"use client"

import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const CurrencyConverter = () => {
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
      <input type="text" value={sourceCurrency} onChange={(e) => setSourceCurrency(e.target.value)} placeholder="Source Currency" />
      <input type="text" value={destinationCurrency} onChange={(e) => setDestinationCurrency(e.target.value)} placeholder="Destination Currency" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button onClick={convertCurrency}>Convert</button>
      {error && <p>Error: {error}</p>}
      {convertedAmount && <p>Converted Amount: {convertedAmount}</p>}
      {fxQuote && <p>FX Quote: {fxQuote}</p>}
    </div>
  );
};

export default function Home() {
  // return <CurrencyConverter />;
}
