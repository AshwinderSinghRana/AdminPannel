const express = require("express");
const upload = require("../Config/multerConfig");
const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productController");

const productRouter = express.Router();

productRouter.post("/", upload.single("image"), createProduct);
productRouter.get("/:id", getProduct);
productRouter.get("/", getAllProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
