const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

const products = require('./data/products.js');
const users = require('./data/users.js');
const reviews = require('./data/reviews.js');

app.use(cors());

// Sample route to get product data
app.get('/api/products', (req, res) => {
  // Fetch data from database or file
  res.json(products);
});

// Sample route to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.productId === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Sample route to get user data
app.get('/api/users', (req, res) => {
  // Fetch data from database or file
  res.json(users); // `users` is the data variable
});

// Sample route to get reviews
app.get('/api/reviews', (req, res) => {
  const reviewsWithUsers = reviews.map((review) => {
    const user = users.find((user) => user.userId === review.userId);
    return {
      ...review,
      user,
    };
  });
  res.json(reviewsWithUsers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
