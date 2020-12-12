const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: `http://localhost:${port}`,
};
app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

require("./config/db.config");
require("./routes/user.route.js")(app);

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
