const express = require("express");
const {
  createAdmin,
  deleteAdmin,
  updateAdmin,
  getAdmin,
  getAllAdmin,
} = require("../Controllers/adminController");

const adminRouter = express.Router();

adminRouter.post("/", createAdmin);
adminRouter.delete("/:id", deleteAdmin);
adminRouter.put("/:id", updateAdmin);
adminRouter.get("/:id", getAdmin);
adminRouter.get("/", getAllAdmin);

module.exports = adminRouter;
