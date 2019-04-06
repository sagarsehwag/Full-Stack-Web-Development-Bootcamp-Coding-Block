let a = 10;

function someFunction() {
    console.log(a);
    // let a = 20;
    console.log(a);
}

console.log("a before function call = " + a);
someFunction();
console.log("a after function call = " + a);