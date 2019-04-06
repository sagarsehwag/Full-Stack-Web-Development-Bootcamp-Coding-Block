const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "newTextFile.txt"), (err, data) => {
    if (err) console.error("You are fucked! " + err);
    console.log("Read Operation Complete");
    console.log(data.toString());
})