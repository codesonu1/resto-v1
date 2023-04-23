const { model, Schema } = require("mongoose");

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "enter valid name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "enter valid email"],
      trim: true,
      unique: true,
    },
    number: {
      type: Number,
      required: [true, "enter valid number"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "enter valid password"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "enter valid address"],
      trim: true,
    },
    usertype: {
      type: String,
      default: "customer",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const authModel = new model("Registers", authSchema);
module.exports = authModel;
