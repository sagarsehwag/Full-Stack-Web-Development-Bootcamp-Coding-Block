function exportingFunction(name) {
    console.log("Hello " + name);
}

module.exports = {
    exportingFunction,
    newFunction(newName) {
        console.log("Hello " + newName);
    }
}