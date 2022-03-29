const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://rkvmas:123@cluster0.em4kp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};