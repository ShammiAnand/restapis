const mongoose = require("mongoose");

const connectToMongo = async (url) => {
  return mongoose.connect(url).then(() => console.log("connected to MongoDB"));
};

module.exports = connectToMongo;
