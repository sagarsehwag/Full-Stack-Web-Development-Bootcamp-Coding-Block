function returnFn() {
    function insideFunction() {
        console.log("This is a funtion inside a funtion, Closure");
    }

    return insideFunction;
}

let closureFn = returnFn();
closureFn();