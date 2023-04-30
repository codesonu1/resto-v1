const { Schema, model, Types } = require("mongoose");

const itemSchema = new Schema({
  category: {
    type: Types.ObjectId,
    ref: "categories",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: String,
  discount: {
    type: Number,
    validate: {
      validator: function (dis) {
        return dis >= this.price;
      },
      message: "Discount must be  less than the regular price {{VALUE}}",
    },
  },
});

exports.Item = model("items", itemSchema);
