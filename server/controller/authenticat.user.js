const localStrategy = require("passport-local").Strategy;

let User = require("../model/user.model.js");
module.exports = function (passport) {
  //used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize user
  passport.deserializeUser((user, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(
    "local-signup",
    new localStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: "true", //allow us to pass the entire request to the callback
      },
      function (req, username, password, done) {
        // async
        // user.findone wont fire unless the data is sent back
        process.nextTick(() => {
          //find user whose username is the same as the forms email
          //we are checking to see if the user that is trying to login already exist
          User.findOne({ username: username }, (err, user) => {
            // reutrn err if there is error
            if (err) {
              return done(err);
            }
            if (user) {
              return done(
                null,
                false,
                req.flash("signupMessage", "That username is already taken.")
              );
            } else {
              var newUser = new User();
              newUser.username = username;
              newUser.password = newUser.generateHash(password);
              newUser.email = email;
              newfirstname = firstname;
              newlastname = lastname;

              newUser.save(function (err) {
                if (err) {
                  throw err;
                }
                return done(null, newUser);
              });
            }
          });
        });
      }
    )
  );
};
