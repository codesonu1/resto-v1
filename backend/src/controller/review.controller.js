const { reviewModel } = require("../model/review.model");
const catchAsync = require("../middleware/catchAsync");

exports.postReview = catchAsync(async (req, res, next) => {
  const data = await reviewModel.create({
    res_id: req.params._id,
    name: req.body.name,
    comments: req.body.comments,
    rating: req.body.rating,
  });
  res.status(201).json({
    message: "Post Review",
    success: true,
    review: {
      data,
    },
  });
  next();
});

exports.getReview = catchAsync(async (req, res, next) => {
  const data = await reviewModel.find({});
  res.status(200).json({
    success: true,
    total: data.length,
    review: {
      data,
    },
  });
  next();
});

exports.getReviewById = catchAsync(async (req, res, next) => {
  const data = await reviewModel.find(req.params._id);
  res.status(200).json({
    success: true,
    total: data.length,
    review: {
      data,
    },
  });
  next();
});

exports.dltReview = catchAsync(async (req, res, next) => {
  const data = await reviewModel.deleteMany({});
  res.status(200).status(200).json({
    success: true,
    data,
  });
  next();
});
