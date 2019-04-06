$(() => {
    let socket = io();

    $("#sendButton").click(() => {
        socket.emit("send_message", {
            message: $("#inputBox").val(),
            username: $("#username").val()
        })
    })

    socket.on("send_message", (data) => {
        $("#list").append(
            $("<li>")
            .text(data.username + ": " + data.message)
            .attr("class", "list-group-item mt-3 rounded")
        )
    })
})