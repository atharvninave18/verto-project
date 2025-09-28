// index.js
import express, { json } from 'express';
import cors from 'cors';
import products from './data.js'; 

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors()); 
app.use(json()); 

// --- API Endpoints ---

// 1. Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// 2. Checkout (simulated)
app.post('/api/checkout', (req, res) => {
    console.log(req.body);
  const { cartItems, total } = req.body;

  console.log('--- NEW ORDER RECEIVED ---');
  console.log('Cart Items:', JSON.stringify(cartItems, null, 2));
  console.log('Total Price:', total);
  console.log('--------------------------');

  res.status(200).json({ message: 'Order received! Check the console for details.' });
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});