//IMPORT -> PACKAGE
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//CONFIGERATION
const connectDB = require('./config/database');
const dev = require('./config');
const port = dev.app.port; //set config...

//IMPORT -> ROUTER
// const userRoute = require('./MVC/routers/User_Router');
// const productRoute = require('./MVC/routers/Products_Router');

//IMPORT -> MIDDLEWARE
const logger = require('./middleware/logger_middleware');
const errorHandler = require('./middleware/errorHandler');

//APP USES
const app = express();

//PACKAGE USES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//MIDDLEWARE USES
app.use(logger);
app.use(errorHandler);

//ROUTER USES
// app.use('/api/v1/user', userRoute); // USERS
// app.use('/api/v1/product', productRoute); // PRODUCT

// ----- BASIC-SETUP-SHOW-PRODUCTS-IN-TESTING-PURPOSE ------ //
const products = require('./data/products');

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.productId === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

//SERVER RUNING ON
app.listen(port, async () => {
  console.log(`server runing http://localhost:${port}`);
  await connectDB();
});
