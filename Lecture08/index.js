let btnWait = document.getElementById('btnWait');
let btnCount = document.getElementById('btnCount');
let divResult = document.getElementById('divResult');

let count = 0;

// btnCount.onclick

btnWait.onclick = () => {
    divResult.innerText = "Waiting!";
}

