const mongoose = require("mongoose");

const subCategoryProductSchema = new mongoose.Schema({
  categoryFK: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  name: { type: String, require: true },
});

module.exports = new mongoose.model("SubCategory", subCategoryProductSchema);
