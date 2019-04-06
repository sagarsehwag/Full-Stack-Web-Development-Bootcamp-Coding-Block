function acceptor(nameGen) {
    console.log("Hello " + nameGen());
}

acceptor(() => {
    return "John!";
})