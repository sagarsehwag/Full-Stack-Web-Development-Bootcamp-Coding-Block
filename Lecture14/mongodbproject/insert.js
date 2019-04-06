const MongoClient = require("mongodb").MongoClient;
const MONGODB_URL = "mongodb://localhost:27017";

MongoClient.connect(MONGODB_URL, (err, client) => {
    if (err) {
        throw err;
    }
    const tododb = client.db("tododb");
    const todos = tododb.collection("todos");

    todos.insertMany([{
            name: "Sagar Sehwag",
            age: "21",
            chutiya: false
        },
        {
            name: "Sarthak Pandey",
            age: "20",
            chutiya: true
        },
        {
            name: "Prashant Trar",
            age: "20",
            chutiya: false
        }
    ])
})