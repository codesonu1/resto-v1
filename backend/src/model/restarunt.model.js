const { Schema, model, Types } = require("mongoose");

const restrauntSchema = new Schema({
  city: {
    type: Types.ObjectId,
    ref: "cities",
  },
  name: String,
  description: String,
  tags: String,
  openTIme: Date,
  closeTIme: Date,
  image: String,
  location: String,
  deliveryTime: Date,
  cuisine: [String], // for filter purpose
  ratings: {
    total: Number,
    numOfRating: Number,
    avg: Number,
    stars: {
      5: Number,
      4: Number,
      3: Number,
      2: Number,
      1: Number,
    },
    list: [
      {
        rate: Number,
        desc: String,
        userid: String,
      },
    ],
  },
});

exports.restraunts = model("restraunts", restrauntSchema);
