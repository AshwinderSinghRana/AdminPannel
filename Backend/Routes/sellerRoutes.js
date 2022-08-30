const express = require("express");
const {
  createSeller,
  deleteSeller,
  updateSeller,
  getSeller,
  getAllSeller,
} = require("../Controllers/sellerController");

const sellerRouter = express.Router();

sellerRouter.post("/add", createSeller);
sellerRouter.delete("delete/:id", deleteSeller);
sellerRouter.put("/:id", updateSeller);
sellerRouter.get("/:id", getSeller);
sellerRouter.get("/", getAllSeller);

module.exports = sellerRouter;
