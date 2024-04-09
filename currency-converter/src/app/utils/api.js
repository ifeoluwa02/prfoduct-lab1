// utils/api.js

import axios from 'axios';

const apiUrl = 'http://localhost:3000'; 

export const convertCurrency = async (sourceCurrency, destinationCurrency, amount) => {
  try {
    const response = await axios.get(`${apiUrl}/api/convert`, {
      params: {
        source: sourceCurrency,
        destination: destinationCurrency,
        amount: amount
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};
