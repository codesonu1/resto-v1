const asyncexpresshandler = require("express-async-handler");
const authModel = require("../model/auth.model");
const jwttoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = 10;

exports.signup = asyncexpresshandler(async (req, res) => {
  try {
    await authModel.find({}).then((data) => {
      res.status(200).json({
        message: "created Successfully",
        success: true,
        data,
      });
    });
  } catch (error) {
    res.status(400).json({
      message: "internal Server Error",
    });
    console.log(error);
  }
});

exports.createUser = asyncexpresshandler(async (req, res) => {
  console.log(process.env.SECRET_KEY);
  const { name, email, number, password } = req.body;
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

exports.changePassword = asyncexpresshandler(async (req, res) => {
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

exports.deleteMany = asyncexpresshandler(async (req, res) => {
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

exports.deleteByid = asyncexpresshandler(async (req, res) => {
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

exports.login = asyncexpresshandler(async (req, res) => {
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
  const logintoken = await jwttoken.sign(jwtData, process.env.SECRET_KEY);
  res.status(200).json({
    success: true,
    message: "Well Come User",
    loginToken: logintoken,
  });
});
