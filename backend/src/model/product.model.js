const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  location: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },

  items: [
    {
      restruant_name: {
        type: String,
        trim: true,
        required: [true, "restruant_name is required"],
      },
      restruant_desc: {
        type: String,
        trim: true,
      },
      restruant_tag: String,
      price: Number,
      image: String,
      restruant_location: String,
      restruant_open: Number,
      restruant_closed: Number,
      food_type: {
        type: String,
        trim: true,
        enum: ["veg", "non-veg"],
        required: [true, "food_type is required"],
      },
      status: {
        type: String,
        trim: true,
        enum: ["open", "closed"],
        required: [true, "status is required"],
      },
      delivery_time: {
        type: Number,
        trim: true,
        required: [true, "delivery_time is required"],
      },
      food_name: {
        type: String,
        trim: true,
        //required: [true, "food_name is required"],
      },
      discount: {
        type: Number,
        validate: {
          validator: function (dis) {
            return dis < this.price;
          },
          message:
            "The Discount amount {VALUE} should be less than total price",
        },
      },
    },
  ],
  category: [
    {
      category: {
        type: String,
        trim: true,
        required: [true, "category is required"],
      },
      Cat_price: {
        type: Number,
        required: [true, "price is required"],
      },
      Cat_discount: {
        type: Number,
        validate: {
          validator: function (el) {
            return el < this.Cat_price;
          },
          message:
            "The Discount amount {VALUE} should be less than total price",
        },
      },
    },
  ],
});

const productModel = new model("Products", productSchema);
module.exports = productModel;
