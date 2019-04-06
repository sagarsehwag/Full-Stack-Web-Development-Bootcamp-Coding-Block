const express = require("express");
const app = express();

let tasks = [];

// Body Parser
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

// Routing
app.get("/tasks", (req, res) => {
    res.send(tasks);
})

app.post("/task", (req, res) => {
    if (typeof req.body.done === "string") {
        req.body.done = (req.body.done = "true");
    }
    console.log(req.body);
    tasks.push(req.body);
    req.status(201).send({
        success: true,
        id: tasks.length - 1
    })
})

app.get("/task/")