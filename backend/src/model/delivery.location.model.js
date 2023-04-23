const { Schema, model } = require("mongoose");

const deliveryLoactionSchema = new Schema({
  location: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  delivery_time: {
    type: String,
  },
});

exports.Destination = new model("DeliveryLocations", deliveryLoactionSchema);
