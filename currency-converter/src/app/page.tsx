// pages/index.js


// export default function Home() {
//   return (
//     <div>
      
//     </div>
//   );

import React from 'react'
import CurrencyConverter from './components/CurrencyConverter';
const page = () => {
  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyConverter />
    </div>
  )
}

export default page
