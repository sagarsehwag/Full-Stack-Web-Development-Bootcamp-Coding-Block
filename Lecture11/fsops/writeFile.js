const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname, "newTextFile.txt"), "Yo what's up bitches!", (err) => {
    if (err) console.error(err);
    console.log("Write Operation Ended");
})