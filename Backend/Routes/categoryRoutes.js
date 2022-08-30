const express = require("express");
const {
  getcategory,
  createcategory,
  getAllcategory,
  updatecategory,
  deletecategory,
} = require("../Controllers/categoryController");

const categoryRouter = express.Router();

categoryRouter.post("/", createcategory);
categoryRouter.get("/:id", getcategory);
categoryRouter.get("/", getAllcategory);
categoryRouter.put("/:id", updatecategory);
categoryRouter.delete("/:id", deletecategory);

module.exports = categoryRouter;
