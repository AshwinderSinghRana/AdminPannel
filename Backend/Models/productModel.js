const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  subCategoryFK: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  brand: { type: String, require: true },
  sellerFK: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
});
module.exports = new mongoose.model("Product", productSchema);
