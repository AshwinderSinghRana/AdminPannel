const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
    unique: true,
  },
  shop: {
    type: String,
    require: true,
    unique: true,
  },
  location: {
    type: String,
    require: true,
    unique: true,
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

module.exports = new mongoose.model("Seller", sellerSchema);
