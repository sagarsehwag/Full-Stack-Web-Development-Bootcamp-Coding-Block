const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

app.get("/page1", (req, res) => {
  req.session.page1++;
  res.send("Welcome " + (req.session.page1 > 1 ? "Back " : "") + "to Page 1");
});

app.get("/page2", (req, res) => {
  req.session.page2++;
  res.send("Welcome " + (req.session.page2 > 1 ? "Back " : "") + "to Page 2");
});

app.get("/page3", (req, res) => {
  req.session.page3++;
  res.send("Welcome " + (req.session.page3 > 1 ? "Back " : "") + "to Page 3");
});

app.listen(5000, () => {
  console.log("Server Started at 5000");
});
