const Admin = require("../Models/userModel");

async function createAdmin(req, res) {
  try {
    let result = await Admin.create(req.body);
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function deleteAdmin(req, res) {
  try {
    let result = await Admin.deleteOne({ _id: req.params.id });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getAdmin(req, res) {
  try {
    let result = await Admin.findById({ _id: req.params.id });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getAllAdmin(req, res) {
  try {
    let total = await Admin.find().count();

    let result = await Admin.find();
    res.status(200).send({ success: true, result, total });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function updateAdmin(req, res) {
  try {
    let result = await Admin.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  createAdmin,
  deleteAdmin,
  updateAdmin,
  getAllAdmin,
  getAdmin,
};
