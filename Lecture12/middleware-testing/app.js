const app = require("express")();

app.use("/a", (req, res) => {
    console.log("Yo Bitches");
    next();
})

app.use("a/b", (req, res, next) => {
    console.log("Yo bitches coming from " + req.path);
})