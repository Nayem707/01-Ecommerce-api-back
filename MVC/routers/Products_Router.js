const express = require('express');
const router = express.Router();

const {
  getAllProduct,
  singleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/Products_Controller');

router.route('/').get(getAllProduct).post(createProduct);
router
  .route('/:id')
  .get(singleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
