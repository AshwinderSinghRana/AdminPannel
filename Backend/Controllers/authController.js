const Users = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function verifyUser(req, res) {
  let { email, password } = req.body;
  try {
    let result = await Users.findOne({
      email,
    });
    if (!result) {
      res.send("User Not Found");
    } else {
      //bycrypt
      let decoded = await bcrypt.compare(password, result.password);
      if (!result) {
        res.send("Invalid Password");
      } else {
        //token
        let token = jwt.sign(
          { decoded, expiresIn: 180 },
          process.env.JWT_SECRET_KEY
        );
        res.status(200).send({ message: "Login Success", token });
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = verifyUser;
