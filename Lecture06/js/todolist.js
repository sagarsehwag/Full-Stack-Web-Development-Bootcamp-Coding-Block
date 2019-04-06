console.log("Timepass")
let newtask = document.getElementById("newtask");
let addbtn = document.getElementById("addbtn");
let cards = document.getElementById("newcards");

newtask.addEventListener();

addbtn.onclick = function () {
    let newValue = newtask.value;
    newcards.innerHTML += `
    <div class="card col-5 mx-2 my-3">
        <div class="card-body">
            <h5 class="card-title">${newValue}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            <a href="#" class="btn btn-primary">Disable</a>
        </div>
    </div>
    `;
}