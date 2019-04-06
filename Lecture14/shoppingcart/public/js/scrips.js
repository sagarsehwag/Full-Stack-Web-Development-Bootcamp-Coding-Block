$(() => {
    $.get("/cart", (data) => {
        console.log(data);
        console.log("Fuck Pandey");
        for (let i = 0; i < data.length; i++) {
            $("#cartItems").append(
                generateCartItems(data[i])
            )
        }
    })
})

function generateCartItems(dataItem) {
    return $("<li>")
        .attr("class", "list-group-item rounded border-0 bg-white")
        .append(
            $("<div>")
            .attr("class", "row")
            .append(
                $("<div>")
                .attr("class", "col my-auto rounded border p-2 pl-3 bg-white")
                .text(dataItem.name)
            )
            .append(
                $("<div>")
                .attr("class", "btn-group col-2 my-auto")
                .append(
                    $("<button>")
                    .attr("class", "btn btn-primary shadow")
                    .text(`₹${dataItem.price}`)
                )
                .append(
                    $("<button>")
                    .attr("class", "btn btn-danger shadow")
                    .text("Delete")
                )
            )
        )
}