const mongoose = require("mongoose");

const categoryProductSchema = new mongoose.Schema({
  name: { type: String, require: true },
});

module.exports = new mongoose.model("Category", categoryProductSchema);
