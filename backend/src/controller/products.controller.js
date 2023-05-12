const catchAsync = require("../middleware/catchAsync");
const { category } = require("../model/category.mode");
const { City } = require("../model/city.model");
const { item } = require("../model/item.model");
const { restraunts } = require("../model/restarunt.model");
const cloudinary = require("../utils/cloudinary");
const FeatureAPI = require("./../utils/featureAPI");

// 1) CITY

//get city
exports.getAllCity = catchAsync(async (req, res, next) => {
  const cities = await City.find({});
  res.status(200).json({
    status: "success",
    data: cities,
  });

  next();
});

//get by ID city
exports.getById = catchAsync(async (req, res, next) => {
  const cityById = await City.findById(req.params._id);
  res.status(200).json({
    status: "success",
    data: cityById,
  });
  next;
});

//post city
exports.postCity = catchAsync(async (req, res, next) => {
  const file = req.files.image;
  const result = await cloudinary.uploader.upload(file.tempFilePath);
  const city = await City.create({
    name: req.body.name,
    street: req.body.street,
    image: result.secure_url,
  });
  res.status(201).json({
    status: "success",
    data: city,
  });
  next();
});

//delete city
exports.deleteCity = catchAsync(async (req, res, next) => {
  const deleteCity = await City.deleteMany({});

  res.status(200).json({
    status: "success",
    data: deleteCity,
  });

  next();
});

//delete by ID city
exports.deleteCityById = catchAsync(async (req, res, next) => {
  const deleteCityById = await City.findByIdAndDelete(req.params._id);

  res.status(200).json({
    status: "success",
    data: deleteCityById,
  });
  next();
});

// get restraunts
exports.getRestraunts = catchAsync(async (req, res, next) => {
  const featureQuery = new FeatureAPI(restraunts.find({}), req.query).filter();

  const data = await featureQuery.query;
  res.status(200).json({
    success: true,
    total: data.length,
    data,
  });
  next();
});

//post by id Restraunt
exports.postRestraunt = catchAsync(async (req, res, next) => {
  const file = req.files.image;

  const result = await cloudinary.uploader.upload(file.tempFilePath);

  const data = await restraunts.create({
    city_id: req.params._id,
    image: result.secure_url,
    name: req.body.name,
    description: req.body.description,
    cusinis: req.body.cusinis,
    rating: req.body.rating,
    location: req.body.location,
    delivery_time: req.body.delivery_time,
    opening: req.body.opening,
    closing: req.body.closing,
  });

  res.status(201).json({
    status: "success",
    data,
  });
  next();
});

exports.dltRestraunts = catchAsync(async (req, res, next) => {
  const data = await restraunts.deleteMany({});
  console.log(data);
  res.status(200).json({
    success: true,
    data,
  });
  next();
});

exports.getRestrauntsById = catchAsync(async (req, res, next) => {
  const data = await restraunts.findById(req.params._id);
  console.log(data);
  res.status(200).json({
    success: true,
    data,
  });
  next();
});

exports.postCategorys = catchAsync(async (req, res, next) => {
  const data = await category.create({
    res_id: req.params._id,
    name: req.body.name,
  });

  res.status(201).json({
    success: true,
    data,
  });
});

exports.getCategorys = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  const excludeFeild = ["limit", "sort", "fields", "page"];

  excludeFeild.forEach((el) => delete queryObj[el]);

  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  let query = category.find(JSON.parse(queryStr));

  const data = await query;
  res.status(200).json({
    total: data.length,
    success: true,
    data,
  });
  next();
});

exports.dltCategorys = catchAsync(async (req, res, next) => {
  const data = await category.deleteMany({});
  res.status(200).json({
    success: true,
    data,
  });
  next();
});

exports.getItems = catchAsync(async (req, res, next) => {
  const data = await item.find({});
  res.status(200).json({
    success: true,
    data,
  });
  next();
});

exports.postItem = catchAsync(async (req, res, next) => {
  const file = req.files.image;
  const result = await cloudinary.uploader.upload(file.tempFilePath);
  console.log(result, "result");
  const data = await category.findByIdAndUpdate(
    req.params._id,
    {
      $push: {
        items: {
          name: req.body.name,
          price: req.body.price,
          image: result.secure_url,
          discount: req.body.discount,
        },
      },
    },
    {
      new: true,
    }
  );
  res.status(201).json({
    success: true,
    data,
  });
  next();
});

exports.getitem = catchAsync(async (req, res, next) => {
  const data = await category.findById(req.params._id);
  res.status(201).json({
    success: true,
    data,
  });
  next();
});
