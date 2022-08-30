const product = require("../Models/productModel");
const uploader = require("../Config/cloudConfig");

async function createProduct(req, res) {
  //creating url of images and create data
  let file = await uploader.uploader.upload(req.file.path);
  let fileURL = file.secure_url;
  try {
    let result = await product.create({ ...req.body, image: fileURL });
    res.status(200).send({ success: "Product Created", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteProduct(req, res) {
  try {
    let result = await product.deleteOne({ _id: req.params.id });
    res.status(201).send({ success: "Product deleted", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getProduct(req, res) {
  try {
    let result = await product.findById({ _id: req.params.id });
    res.status(201).send({ success: "Here is the product", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAllProduct(req, res) {
  try {
    let total = await product.find().count();

    let result = await product
      .find()
      .populate({
        path: "subCategoryFK",
        populate: { path: "categoryFK" },
      })
      .populate("sellerFK");
    res.status(201).send({ success: "Here is the all product", total, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateProduct(req, res) {
  try {
    let result = await product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(201).send({ success: "Here is the product", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
};
