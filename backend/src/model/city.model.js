const { Schema, model } = require("mongoose");

const citySchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    require: [true, "reqired"],
  },
  street: {
    type: String,
    require: [true, "reqired"],
  },
});

exports.City = model("cities", citySchema);
