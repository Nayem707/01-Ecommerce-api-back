const logger_middleware = (req, res, next) => {
  console.log(`${req.method}::${req.url}`);
  next();
};

module.exports = logger_middleware;
