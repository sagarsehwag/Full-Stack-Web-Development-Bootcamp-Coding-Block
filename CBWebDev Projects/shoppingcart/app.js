const express = require("express");
const path = require("path");

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URL = "mongodb://localhost:27017";

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    // console.log("website visited");
})

app.get("/cart", (req, res) => {
    MongoClient.connect(MONGODB_URL, (err, client) => {
        if (err) {
            throw err;
        }
        const shoppingcartdb = client.db("shoppingcartdb");
        const shoppingcart = shoppingcartdb.collection("shoppingcart");
        shoppingcart
            .find({

            })
            .toArray((err, result) => {
                if(err){
                    throw err;
                }
                console.log(result);
                return res.send(result);
            })
    });
});

app.listen(5000, () => {
    console.log("server started at 5000");
});