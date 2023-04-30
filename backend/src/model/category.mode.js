const { Schema, model, Types } = require("mongoose");

const categorySchema = new Schema({
  restraunts: {
    type: Types.ObjectId,
    ref: "restraunts",
  },
  name: {
    type: String,
    trim: true,
    required: [true, "category is required"],
  },
});

exports.Category = model("categories", categorySchema);
