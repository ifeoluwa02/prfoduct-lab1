// // mockHandlers.js
// import { rest } from 'msw';

// const apiUrl = 'https://openexchangerates.org/api';

// export const handlers = [
//   rest.get(`${apiUrl}/currencies.json`, (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json({
//         USD: 'United States Dollar',
//         EUR: 'Euro',
//         GBP: 'British Pound Sterling',
       
//       })
//     );
//   }),
//   rest.get(`${apiUrl}/convert`, (req, res, ctx) => {
//     const { source, destination, amount } = req.params;
//     const convertedAmount = amount * Math.random() * 10; // Mock conversion
//     const fxQuote = Math.random() * 2; // Mock FX quote
//     return res(
//       ctx.status(200),
//       ctx.json({
//         convertedAmount,
//         fxQuote,
//       })
//     );
//   }),
// ];
