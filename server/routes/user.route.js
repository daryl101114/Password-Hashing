module.exports = (app) => {
  const users = require("../controller/user.controller.js");
  const auth = require("../controller/authenticat.user");
  //   const passVerify = require("../controller/authenticat.user.js");
  //   const passport = require("passport");

  var router = require("express").Router();

  router.get("/", users.findAll);
  router.post("/register", users.create);
  router.post("/auth", );

  //   router.post("/login", passVerify);
  //   app.use(passport.initialize());
  //   app.use(passport.session());
  app.use("/api/users", router);
};
