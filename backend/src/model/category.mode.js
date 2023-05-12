const { Schema, model, Types } = require("mongoose");

const categorySchema = new Schema({
  res_id: {
    type: Types.ObjectId,
    ref: "restraunts",
  },
  name: {
    type: String,
    trim: true,
  },
  items: [
    {
      name: {
        type: String,
        trim: true,
      },
      image: String,
      price: {
        type: Number,
      },
      discount: {
        type: String,
      },
    },
  ],
});

exports.category = model("categories", categorySchema);
