const express = require("express");
const {
  createSubCategory,
  getSubCategory,
  getAllSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../Controllers/subCategoryController");

const subCategoryRouter = express.Router();

subCategoryRouter.post("/", createSubCategory);
subCategoryRouter.get("/:id", getSubCategory);
subCategoryRouter.get("/", getAllSubCategory);
subCategoryRouter.put("/:id", updateSubCategory);
subCategoryRouter.delete("/:id", deleteSubCategory);

module.exports = subCategoryRouter;
