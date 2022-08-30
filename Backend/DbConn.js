const mongoose = require("mongoose");

async function dbconn() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = dbconn;
