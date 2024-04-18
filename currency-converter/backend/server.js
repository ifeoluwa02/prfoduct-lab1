"use client"

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle currency conversion
app.post('/convert', async (req, res) => {
  try {
    // Extract sourceCurrency, destinationCurrency, and amount from request body
    const { sourceCurrency, destinationCurrency, amount } = req.body;

    // Call an external API or perform currency conversion logic here
    // For this example, we'll just return a mock response
    const convertedAmount = amount * 2; // Mock conversion: double the amount
    const fxQuote = 2; // Mock FX quote

    // Send back the converted amount and FX quote in the response
    res.json({ convertedAmount, fxQuote });
  } catch (error) {
    console.error('Error converting currency:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the currency converter API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
