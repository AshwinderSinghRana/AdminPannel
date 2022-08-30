const express = require("express");

const verifyUser = require("../Controllers/authController");
const authRouter = express.Router();

authRouter.post("/", verifyUser);

module.exports = authRouter;
