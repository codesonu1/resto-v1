const catchAsync = require("../middleware/catchAsync");
const productModel = require("../model/product.model");
const path = require("path");

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const data = await productModel.find({});
  res.status(200).json({
    success: true,
    data,
  });
});

exports.postDelivery = catchAsync(async (req, res, next) => {
  const data = await productModel.create({
    location: req.body.location,
    image: req.file.path,
  });

  res.status(200).json({
    success: true,
    data,
  });
});

exports.postItems = catchAsync(async (req, res, next) => {
  req.body.image = req.file?.path;

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
});

exports.postMenu = catchAsync(async (req, res, next) => {
  console.log("route hit");

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
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const data = await productModel.deleteMany({});
  res.status(200).json({
    success: true,
    data,
  });
});
