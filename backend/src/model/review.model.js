const { model, Schema, Types } = require("mongoose");

const reviewSchema = new Schema({
  res_id: {
    type: Types.ObjectId,
    ref: "restraunts",
  },
  name: {
    type: String,
    trim: true,
  },
  comments: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
  },
});

exports.reviewModel = new model("reviews", reviewSchema);
