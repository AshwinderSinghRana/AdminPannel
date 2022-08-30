const express = require("express");
const upload = require("../Config/multerConfig");

const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require("../Controllers/userController");

const userRouter = express.Router();

userRouter.post("/", upload.single("image"), createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
userRouter.get("/:id", getUser);
userRouter.get("/", getAllUser);

module.exports = userRouter;
