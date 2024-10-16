// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'fail',
    message: 'Something went wrong!',
    error: err.message,
  });
};

module.exports = errorHandler;
