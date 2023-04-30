const catchAsync = require("../middleware/catchAsync");
const productModel = require("../model/product.model");
const cloudinary = require("../utils/cloudinary");

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const data = await productModel.find({});
  res.status(200).json({
    success: true,
    data,
  });
});

exports.postDelivery = catchAsync(async (req, res, next) => {
  const file = req.files.image;
  const result = await cloudinary.uploader.upload(file.tempFilePath);

  const data = await productModel.create({
    location: req.body.location,
    image: result.secure_url,
  });

  res.status(200).json({
    success: true,
    data,
  });
  next();
});

exports.postItems = catchAsync(async (req, res, next) => {
  const file = req.files.image;
  const result = await cloudinary.uploader.upload(file.tempFilePath);
  req.body.image = result.secure_url;

  const data = await productModel.findByIdAndUpdate(
    req.params._id,
    {
      $push: {
        items: req.body,
      },
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    success: true,
    data,
  });
  next();
});

exports.deleteByIdProduct = catchAsync(async (req, res, next) => {
  const data = await productModel.findByIdAndDelete(req.params._id);

  res.status(200).json({
    success: true,
    data,
  });
  next();
});

exports.postMenu = catchAsync(async (req, res, next) => {
  const data = await productModel.findOneAndUpdate(
    req.params._id,
    {
      $push: {
        menu: req.body,
      },
    },
    {
      new: true,
    }
  );
  console.log(data);
  res.status(200).json({
    success: true,
    data,
  });

  next();
});

exports.findByIdProduct = catchAsync(async (req, res, next) => {
  const data = await productModel.findById(req.params._id);

  res.status(200).json({
    success: true,
    data,
  });

  next();
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const data = await productModel.deleteMany({});
  res.status(200).json({
    success: true,
    data,
  });
});
