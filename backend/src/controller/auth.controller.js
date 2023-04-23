const catchAsync = require("../middleware/catchAsync");
const authModel = require("../model/auth.model");
const jwttoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = 10;

exports.signup = catchAsync(async (req, res, next) => {
  await authModel.find({}).then((data) => {
    res.status(200).json({
      message: "created Successfully",
      success: true,
      data,
    });
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  console.log(process.env.SECRET_KEY);
  const { name, email, number, password, address, usertype } = req.body;
  const hashpassword = await bcrypt.hashSync(password, salt);
  const existEmail = await authModel.findOne({ email: email });
  if (existEmail) {
    return res.status(404).json({
      success: false,
      messsage: "already exist",
    });
  } else {
    const data = await authModel.create({
      name,
      email,
      number,
      password: hashpassword,
      address,
      usertype,
    });
    const jwtdata = {
      user: {
        id: data._id,
      },
    };
    const authtoken = await jwttoken.sign(jwtdata, process.env.SECRET_KEY);
    res
      .status(200)
      .json({
        message: "Signu Successfully",
        success: true,
        data,
        authtoken,
      })
      .catch((err) => console.log(err));
  }
});

exports.changePassword = catchAsync(async (req, res, next) => {
  const password = await authModel.findByIdAndUpdate(req.params._id, {
    $set: {
      password: bcrypt.hashSync(req.body.password, salt),
    },
    new: true,
  });
  res
    .status(200)
    .json({
      message: "Change successfully",
      success: true,
      newpassword: password,
    })
    .catch((err) => console.log(err));
});

exports.deleteMany = catchAsync(async (req, res, next) => {
  await authModel
    .deleteMany({})
    .then((data) => {
      res.status(200).json({
        message: "deleted Successfully",
        success: true,
        data,
      });
    })
    .catch((err) => console.log(err));
});

exports.deleteByid = catchAsync(async (req, res, next) => {
  await authModel
    .findOneAndDelete(req.params._id)
    .then((data) => {
      res.status(200).json({
        message: "deleted Successfully",
        success: true,
        data,
      });
    })
    .catch((err) => console.log(err));
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const checkMail = await authModel.findOne({ email: email });
  if (!email) {
    res.status(404).json({
      message: "invalid mail",
      success: false,
    });
  }
  const checkPassword = await bcrypt.compare(password, checkMail.password);
  if (!checkPassword) {
    res.status(404).json({
      success: false,
      message: "invalid password",
    });
  }
  const jwtData = {
    login: {
      id: checkMail._id,
    },
  };
  console.log(authModel.usertype);

  const logintoken = await jwttoken.sign(jwtData, process.env.SECRET_KEY);
  res.status(200).json({
    success: true,
    message: "Well Come-User",
    loginToken: logintoken,
    role: this.usertype,
  });
});

exports.getuserlogin = catchAsync(async (req, res, next) => {
  const loginId = req.login.id;
  console.log(loginId, "user id");
  const user = await authModel.findById(loginId).select("-password");
  console.log(user);
  res.status(200).json({
    message: "user login data",
    data: user,
  });
});
