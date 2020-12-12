const mongoose = require("mongoose");
const pass = "s06YBoaL2m2RPIeM";

const uri = `mongodb+srv://jdsantil:${pass}@cluster0.yhkrx.mongodb.net/ecommerce?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
