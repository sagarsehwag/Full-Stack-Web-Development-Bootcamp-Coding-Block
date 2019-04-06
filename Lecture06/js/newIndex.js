let newlist = document.getElementById("newlist");
let printlist = document.getElementById("printlist");
let list = document.getElementById("list");

printlist.onclick = () => {
    let startTime = new Date().getTime();

    let htmlData = ``;
    for (let i = 1; i < newlist.value; i++) {
        htmlData += `<li> ${i} </li>`
    }

    list.innerHTML += htmlData;

    console.log(new Date().getTime() - startTime)
}