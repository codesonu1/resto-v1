const catchAsync = require("../middleware/catchAsync");
const { Destination } = require("../model/delivery.location.model");
const cloudinary = require(" ../../../src/utils/cloudinary");

const getAllDestination = catchAsync(async (req, res, next) => {
  const data = await Destination.find({});
  res.status(200).json({
    message: " get Destination",
    success: true,
    data: data,
  });
});

const postDestination = catchAsync(async (req, res, next) => {
  console.log(req.files);
  console.log(req.file);

  const { location, delivery_time } = req.body;
  // const promises = [
  //   new Promise((resolve, reject) => {
  //     // Use the upload_stream method to upload the file to Cloudinary
  //     cloudinary.uploader
  //       .upload_stream(
  //         {
  //           public_id: req.files?.image[0].originalname,
  //           folder: "image-up",
  //         },
  //         (error, result) => {
  //           if (error) {
  //             reject(error);
  //           } else {
  //             resolve(result);
  //           }
  //         }
  //       )
  //       .end(req.files?.image[0].buffer);
  //   }),
  // ];

  // const imageFile = await Promise.all(promises); // Use destructuring to get the resolved value

  const data = await Destination.create({
    location,
    image: req.file.path,
    delivery_time,
  });
  res.status(200).json({
    message: "Post Destination",
    success: true,
    data: data,
  });
});

const deleteLocation = catchAsync(async (req, res, next) => {
  const data = await Destination.deleteMany({});
  res.status(200).json({
    message: "Post Destination",
    success: true,
    data: data,
  });
});

const updateLocation = catchAsync(async (req, res, next) => {
  console.log(req.params._id);

  const data = await Destination.findByIdAndUpdate(
    req.params._id,
    {
      $set: {
        location: req.body.location,
      },
    },
    {
      new: true,
    }
  );
  res.status(200).json({
    message: "update success fully",
    success: true,
    data: data,
  });
});

module.exports = {
  getAllDestination,
  postDestination,
  deleteLocation,
  updateLocation,
};
