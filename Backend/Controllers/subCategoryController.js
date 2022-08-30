const subCategory = require("../Models/subCategoryModel");

async function createSubCategory(req, res) {
  try {
    let result = await subCategory.create(req.body);
    res.status(200).send({ success: "subCategory Created", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteSubCategory(req, res) {
  try {
    let result = await subCategory.deleteOne({ _id: req.params.id });
    res.status(201).send({ success: "subCategory deleted", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getSubCategory(req, res) {
  try {
    let result = await subCategory.findById({ _id: req.params.id });
    res.status(201).send({ success: "Here is the subCategory", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAllSubCategory(req, res) {
  try {
    let total = await subCategory.find().count();

    let result = await subCategory.find().populate("categoryFK");
    res
      .status(201)
      .send({ success: "Here is the all subCategory", total, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateSubCategory(req, res) {
  try {
    let result = await subCategory.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res
      .status(201)
      .send({ success: "Here is the updated subCategory", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  createSubCategory,
  deleteSubCategory,
  updateSubCategory,
  getAllSubCategory,
  getSubCategory,
};
