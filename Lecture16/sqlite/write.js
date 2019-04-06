const sqlite = require("sqlite3").verbose()
const path = require("path");

const db = new sqlite.Database(path.join(__dirname, "my.db"));

db.serialize(() => {
    db.run("DROP TABLE IF EXIST tasks");
    db.run("CREATE TABLE tasks (id INTEGER PRIMARY KEY, name TEXT);");
    db.run("INSERT INTO tasks (name) VALUES ('some tasks')")
})