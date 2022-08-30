const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
    unique: true,
  },
  image: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = new mongoose.model("Users", userSchema);
