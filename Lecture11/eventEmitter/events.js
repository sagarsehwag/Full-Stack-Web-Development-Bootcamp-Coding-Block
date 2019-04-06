const EventEmitter = require("events");
// class MyEmitter extends EventEmitter {};

let myEmittter = new EventEmitter();
myEmittter.on("bakwas", (data) => {
    console.log(`Hello ${data}`)
})


myEmittter.emit("bakwas", "Sagar Sehwag");