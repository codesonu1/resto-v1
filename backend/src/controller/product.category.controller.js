const catchAsync = require("../middleware/catchAsync");
const productModel = require("../model/product.model");

exports.postCategory = catchAsync(async (req, res, next) => {
  console.log("route hit");
  const data = await productModel.updateOne(
    req.params._id,
    { "items.restruant_name": req.body.restruant_name },
    {
      $set: {
        category: req.body,
      },
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    message: "update category",
    data,
  });
  next();
});

exports.getAllCategory = catchAsync(async (req, res, next) => {
  const data = await productModel.findById(req.params._id);
  res.status(200).json({
    message: "get all category",
    success: true,
    data,
  });
  next();
});
