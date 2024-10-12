//IMPORT -> PACKAGE
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//CONFIG
const connectDB = require('./config/database');
const dev = require('./config');
const port = dev.app.port;

//IMPORT -> ROUTER
const userRoute = require('./MVC/routers/User_Router');
const productRoute = require('./MVC/routers/Products_Router');

//USE APP
const app = express();

//PACKAGE USES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// USE MIDDLEWARE
const logger = require('./middleware/logger_middleware');
const errorHandler = require('./middleware/errorHandler');

app.use(logger);
app.use(errorHandler);

//USE ROUTER

app.use('/api/v1/user', userRoute); // USERS
app.use('/api/v1/product', productRoute); // USERS

// ------------------BASIC-START --------------------- //
const products = require('./data/products');
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
// ------------------BASIC-END --------------------- //

//SERVER RUNING ON
app.listen(port, async () => {
  console.log(`server runing http://localhost:${port}`);
  await connectDB();
});
