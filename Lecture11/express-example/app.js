const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
    console.log(req.param());
})

app.listen("4000");