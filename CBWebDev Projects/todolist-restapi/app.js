const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // console.log("base path routing");
})

app.listen(5000, () => {
    console.log("sever started at 5000");
});