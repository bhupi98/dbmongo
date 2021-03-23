const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: { type: String, required: true, trim: true },
  age: {
    type: Number,
    required: true,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Number must be greater than 0");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: false,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password conatins 'password' ");
      }
    },
  },
});
module.exports = User;
