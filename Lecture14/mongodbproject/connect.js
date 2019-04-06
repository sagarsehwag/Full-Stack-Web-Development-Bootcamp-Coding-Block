const MongoClient = require("mongodb").MongoClient;
const MONGODB_URL = "mongodb://localhost:27017";

MongoClient.connect(MONGODB_URL, (err, client) => {
    if (err) {
        throw err;
    }
    console.log(client);
    const tododb = client.db("tododb");
    const todos = tododb.collection("todos");
})