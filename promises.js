 

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

delay(1000)
    .then(() => {
        console.log("Step 1");
        return delay(1000);
    })
    .then(() => {
        console.log("Step 2");
        return delay(1000);
    })
    .then(() => {
        console.log("Step 3");
        return delay(1000);
    })
    .then(() => {
        console.log("Step 4");
    });

console.log("End");
