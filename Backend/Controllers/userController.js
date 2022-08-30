const Users = require("../Models/userModel");
const cloudinary = require("../Config/cloudConfig");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  let { email, name, mobile, image, password } = req.body;
  let file = await cloudinary.uploader.upload(req.file.path);
  let fileURL = file.secure_url;
  let hash = await bcrypt.hash(password, 10);
  try {
    let result = await Users.create({
      ...req.body,
      password: hash,
      image: fileURL,
    });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function deleteUser(req, res) {
  try {
    let result = await Users.deleteOne({ _id: req.params.id });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getUser(req, res) {
  try {
    let result = await Users.findById({ _id: req.params.id });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getAllUser(req, res) {
  try {
    let total = await Users.find().count();

    let result = await Users.find();
    res.status(200).send({ success: true, total, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function updateUser(req, res) {
  try {
    let result = await Users.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = { createUser, deleteUser, updateUser, getAllUser, getUser };
