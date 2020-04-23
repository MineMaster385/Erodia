const mongoose = require("mongoose");
const { DBCONNECTION } = require("../config");

module.exports = {
  init: () => {
    const mgOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false,
      poolSize: 10,
      serverSelectionTimeoutMS: 5000,
      family: 4
    };

    mongoose.connect(DBCONNECTION, mgOptions);
    mongoose.Promise = global.Promise;

    mongoose.connection.on("connected", () => console.log("Mongoose connecté !"));
    mongoose.connection.on("disconnected", () => console.log("Mongoose déconnecté !"));
  }
};
