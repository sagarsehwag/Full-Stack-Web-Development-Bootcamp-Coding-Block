const express = require("express");
const path = require("path");
const tasks = require("./tasks");

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.set("view engine", "hbs");


app.get("/", (req, res) => {
    res.render("tasks", {
        title: "Fuck You Pandey",
        tasks: tasks.getTasks
    });
});

app.post("/tasks", (req, res) => {
    tasks.addTask(req.body, () => {
        res.redirect("./tasks");
    })
});

app.use("/", express.static(
    path.join(__dirname, "public")
));


// Server Initialisation
app.listen(4897, () => {
    console.log("Started Server on 4897");
});