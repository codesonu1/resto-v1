const { Schema, model, Types } = require("mongoose");

const restrauntSchema = new Schema(
  {
    city_id: {
      type: Types.ObjectId,
      ref: "cities",
    },
    name: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    image: String,
    cusinis: [String],
    description: {
      type: String,
      trim: true,
    },
    delivery_time: {
      type: String,
    },
    opening: {
      type: String,
    },
    closing: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

exports.restraunts = model("restraunts", restrauntSchema);
