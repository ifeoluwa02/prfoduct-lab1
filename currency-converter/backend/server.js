const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());


app.post('http://localhost:3001/api/convert', (req,res)=>{
    // What ever function u want the backend to do and the actual thing u want it to return if there's something to return will be spent like this


   res.status(200).json()
})



app.get('/api/convert', (req, res) => {
  res.send('Welcome to the currency converter API!');
});

app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});