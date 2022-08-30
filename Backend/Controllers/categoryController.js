const category = require("../Models/categoryModel");

async function createcategory(req, res) {
  try {
    let result = await category.create(req.body);
    res.status(200).send({ success: "category Created", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deletecategory(req, res) {
  try {
    let result = await category.deleteOne({ _id: req.params.id });
    res.status(201).send({ success: "category deleted", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getcategory(req, res) {
  try {
    let result = await category.findById({ _id: req.params.id });
    res.status(201).send({ success: "Here is the category", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAllcategory(req, res) {
  try {
    let total = await category.find().count();

    let result = await category.find();
    res
      .status(201)
      .send({ success: "Here is the all category", total, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updatecategory(req, res) {
  try {
    let result = await category.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(201).send({ success: "Here is the updated category", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  createcategory,
  deletecategory,
  getcategory,
  getAllcategory,
  updatecategory,
};
