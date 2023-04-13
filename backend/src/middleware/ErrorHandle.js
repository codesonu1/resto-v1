const error = async (req, res, next) => {
  console.log("error stack");
  const error = new Error(`not found : ${req.originalUrl}`);
  next(error);
};

const stack = (err, req, res, next) => {
  console.log(err);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log(`this is statusCode ${statusCode}`);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next();
};

module.exports = { error, stack };
