const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const { products } = require('./data');

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log('server listen 8000');
});
