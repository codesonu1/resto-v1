const { model, Schema } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const salt = 10;
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
  role: {
    type: String,
    default: "customer",
    enum: ["admin", "customer", "hotel-admin"],
  },
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
  passwordChangeAt: Date,
});

userSchema.pre("save", async function (next) {
  // if password is modified
  if (!this.isModified("password")) return next();

  //hasing the password
  this.password = await bcrypt.hash(this.password, salt);

  //delete passwordcomfirmed from the database
  this.passwordComfirmed = undefined;
});

userSchema.methods.correctPassword = function (
  crienditailPassword,
  userPassword
) {
  return bcrypt.compare(crienditailPassword, userPassword);
};

// userSchema.methods.createPasswordAfter = async function (JWTTimestamp) {
//   if (this.passwordChangeAt) {
//     const changeTimeStamp = parseInt(
//       this.passwordChangeAt.getTime() / 1000,
//       10
//     );

//     return JWTTimestamp < changeTimeStamp;
//   }
//   //the user has not change the password
//   return false;
// };

const User = model("User", userSchema);

module.exports = User;
