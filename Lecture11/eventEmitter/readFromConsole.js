const process = require("process");

process.stdin.on("data", (data) => {
    console.log(data.toString);
    if (data.toString().startsWith("exit")) {
        console.log("Exting Input Console");
        process.exit();
    }
})