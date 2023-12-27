const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3001;


app.use(cors({
  origin: 'http://localhost:5173', // Replace with the actual origin of your React app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


// Sample data
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

// API to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API to get a specific product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// API to add a new product
app.post('/api/products', (req, res) => {
  // For simplicity, assuming the request body contains a JSON object with a "name" property
  const newProduct = { id: products.length + 1, name: req.body.name };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
