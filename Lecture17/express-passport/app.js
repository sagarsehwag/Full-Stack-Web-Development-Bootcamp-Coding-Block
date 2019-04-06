const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const app = express();

// MongoDB Connection
require("./models/User");
mongoose.connect("mongodb://localhost:27017/testpassport", {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("MongoDB Connected..."));

// Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static("./views"));
app.set("view engine", "hbs");

// Sesssion Middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

// Passport Middleware
const passport = require("./passport");
app.use(passport.initialize());
app.use(passport.session());

// // ROuter
// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.get("/register", (req, res) => {
//   res.render("register");
// });

// function checkAuthentication(req, res, next) {
//   if (req.isAuthenticated()) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// }

// app.get("profile", checkAuthentication, (req, res) => {
//   res.render("profile", { user: req.user });
// });

// app.get("/logout", (req, res) => {
//   req.logOut();
//   res.redirect("/login");
// });

// app.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     successRedirect: "/profile"
//   })
// );
// app.post("/register", (req, res) => {});
