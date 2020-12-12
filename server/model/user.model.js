const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
    firstname: String,
    lastname: String,
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.generateHash(8), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const users = mongoose.model("user", userSchema);
module.exports = users;
