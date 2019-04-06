const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const http = require("http");
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Socket.io server
// const server = http.createServer(app);

let server = app.listen(5000, () => {
    console.log("server started at 5000");
    // console.log(app);
})

const io = socketio(server);
console.log(io);

let userArray = [];

io.on("connection", (socket) => {
    let flag = true;

    // console.log("user connected " + socket.id);
    // socket.on("disconnect", () => {
    //     console.log(`user disconnected ${socket.id}`);
    // })

    socket.on("send_message", (data) => {

        let user = {
            username: data.username,
            id: socket.id
        }

        if (flag) {
            flag = false;
            userArray.push(user);
        }

        let message = data.message;

        if (message.startsWith("@")) {
            let findUser = message.split(" ")[0];
            findUser = findUser.substr(1);

            for (let i = 0; i < userArray.length; i++) {
                if (findUser === userArray[i].username) {
                    io.to(userArray[i].id).emit("send_message", {
                        username: data.username,
                        message: data.message
                    })
                }
            }
        } else {
            io.emit("send_message", data);
        }
    })
})

app.use("/", express.static(path.join(__dirname, "public")));