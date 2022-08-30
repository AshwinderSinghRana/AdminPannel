const Seller = require("../Models/sellerModel");

async function createSeller(req, res) {
  try {
    let result = await Seller.create(req.body);
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function deleteSeller(req, res) {
  try {
    let result = await Seller.deleteOne({ _id: req.params.id });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getSeller(req, res) {
  try {
    let result = await Seller.findById({ _id: req.params.id });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getAllSeller(req, res) {
  try {
    let total = await Seller.find().count();

    let result = await Seller.find();
    res.status(200).send({ success: true, result, total });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function updateSeller(req, res) {
  try {
    let result = await Seller.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  createSeller,
  deleteSeller,
  updateSeller,
  getAllSeller,
  getSeller,
};
