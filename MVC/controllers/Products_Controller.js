const getAllProduct = async (req, res) => {
  res.send('Get All Products');
};

const singleProduct = async (req, res) => {
  res.send('Get Single Products');
};

const createProduct = async (req, res) => {
  res.send('Create Products');
};

const updateProduct = async (req, res) => {
  res.send('Update Products');
};

const deleteProduct = async (req, res) => {
  res.send('Delete Products');
};

module.exports = {
  getAllProduct,
  singleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
