const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("User");

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({
      username: username
    })
      .then((user) => {
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect Password" });
        } else {
          return done(null, user);
        }
      })
      .catch((error) => {
        return done(error, false, { message: "Incorrect Username" });
      });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
