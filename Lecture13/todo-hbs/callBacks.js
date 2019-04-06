function wait1Sec(done) {
    if (!done) {
        done = (() => {});
    };
    setTimeout(done, 1000);
}

function waitNSec(n, done) {
    wait1Sec(() => {
        console.log("Waiting Bitch");
        if (n > 1) {
            waitNSec(n - 1, done);
        } else {
            done();
        }
    })
}

waitNSec(5, () => {
    console.log("Fuck Pandey");
});