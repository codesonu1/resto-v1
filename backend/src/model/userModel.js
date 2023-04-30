const { model, Schema } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "let me khonw your name!"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "let me khonw your email!"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "provide valid email"],
  },
  photo: String,
  password: {
    type: String,
    minlength: 6,
    required: [true, "enter a password"],
    select: false,
  },
  passwordComfirmed: {
    type: String,
    required: [true, "please enter your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "password is not same",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);

  // this snpits of code delete the fiels of passwordComfirmed in model
  this.passwordComfirmed = undefined;
});

// instant method : all the user of the document can access
const User = model("User", userSchema);

module.exports = User;
