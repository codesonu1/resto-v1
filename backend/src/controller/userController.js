const catchAsync = require("../middleware/catchAsync");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });
};

exports.getAllUser = catchAsync(async (req, res, next) => {
  const data = await User.find({});

  res.status(200).json({
    success: true,
    data: {
      user: data,
    },
  });
  next();
});

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    success: true,
    token: signToken(newUser._id),
    data: {
      user: newUser,
    },
  });
});

exports.userlogin = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.send("Email and Password cannot be null");
  }

  const existUser = await User.findOne({ email }).select("+password");
  const comparePsw = await bcrypt.compare(password, existUser.password);

  if (!comparePsw || !existUser) {
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });
  }

  console.log(existUser);
  res.status(201).json({
    success: true,
    token: signToken(existUser._id),
  });
  next();
});

exports.deleteAllUser = catchAsync(async (req, res, next) => {
  const data = await User.deleteMany({});
  res.status(200).json({
    success: true,
    data,
  });
  next();
});

exports.protectRoute = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: " login please no token found ",
    });
  }

  // jwt.verify the token
  const decoded = await promisify(jwt.verify)(token, process.env.SECRET_KEY);
  console.log(decoded);

  //check if user still exist

  const cusrrentUser = await User.findById(decoded.user._id);

  if (!cusrrentUser) {
    return res.status(401).json({
      message: "no token found please login",
      success: false,
    });
  }

  next();
});
