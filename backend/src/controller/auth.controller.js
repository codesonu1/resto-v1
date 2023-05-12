const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("../middleware/catchAsync");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();

const jwtToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });
};
exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.find({});
  res.status(201).json({
    success: true,
    total: user.length,
    data: {
      user,
    },
  });
  next();
});

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    success: true,
    data: {
      user: newUser,
    },
    token: jwtToken(newUser._id),
  });
  next();
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send("Feilds cannot be null", 400);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.send("Invalid email and password", 400);
  }

  res.status(200).json({
    message: "login",
    success: true,
    token: jwtToken(user._id),
  });
});

exports.protectRoute = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  console.log(token, "token");

  if (!token) {
    res.send("no token found please login", 401);
  }

  //1 . verify the token
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  //2 . checking: if there  is no user but also the token is using
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    res.send("No longer token  , please login ", 401);
  }

  console.log(decoded.iat);
  //if user change password after the token was issused
  // if (currentUser.createPasswordAfter(decoded.iat)) {
  //   res.send("user recently changed Password , please login  again", 401);
  // }

  req.user = currentUser;

  next();
});
