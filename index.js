const container = require("./src/starup/container");
const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");

const mongoose = require("mongoose");

//mongoose.set("useCreateIndex", true);

mongoose
  //.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .connect(MONGO_URI, { useNewUrlParser: true})
  .then(() => server.start())
  .catch(console.log);
