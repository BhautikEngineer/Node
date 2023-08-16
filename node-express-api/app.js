const express = require('express');
const app = express();
const port = 3000;

// Sample data
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
];

// Middleware to parse JSON requests
app.use(express.json());

// Route to get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Route to get a specific product by ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
