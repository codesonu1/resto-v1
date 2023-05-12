const { Schema, model, Types } = require("mongoose");

const itemSchema = new Schema({
  category_id: {
    type: Types.ObjectId,
    ref: "categories",
  },
  name: {
    type: String,
    required: true,
  },
  prices: {
    type: Number,
  },
  image: String,
  discount: {
    type: Number,
    validate: {
      validator: function (dis) {
        return dis < this.prices;
      },
      message: "Discount price {{VALUE}} is less than regular price",
    },
  },
});

exports.item = model("items", itemSchema);
