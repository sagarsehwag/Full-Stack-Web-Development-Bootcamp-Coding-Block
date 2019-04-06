const MongoClient = require("mongodb").MongoClient;
const MONGODB_URL = "mongodb://localhost:27017";

MongoClient.connect(MONGODB_URL, (err, client) => {
    if (err) {
        throw err;
    }
    const tododb = client.db("tododb");
    const todos = tododb.collection("todos");

    todos.deleteOne({
        chutiya: true
    }, (err, result) => {
        console.log(result);
    })
})