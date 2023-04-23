const jwttoken = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.authError = (req, res, next) => {
  const authToken = req.header("auth-token");
  console.log(authToken);
  if (!authToken) {
    res.status(404).json({
      success: false,
      error: "please login with valid token",
    });
  }
  try {
    const data = jwttoken.verify(authToken, process.env.SECRET_KEY);
    req.login = data.login;
  } catch (error) {
    console.log({
      error,
      err: "please login with valid token",
    });
  }

  next();
};
