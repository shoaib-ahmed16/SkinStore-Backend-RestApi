const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://rkvmas:123@cluster0-shard-00-00.em4kp.mongodb.net:27017,cluster0-shard-00-01.em4kp.mongodb.net:27017,cluster0-shard-00-02.em4kp.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-gucs4y-shard-0&authSource=admin&retryWrites=true&w=majority");
  };

  
  // "mongodb+srv://rkvmas:123@cluster0.em4kp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"