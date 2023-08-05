// Promises Example.
// https://blog.logrocket.com/guide-promises-node-js/

// function getSum(a, b) {
//     return a+b
// }

function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
        const sum = a + b;

        if (sum <= 5) {
            resolve("Let's go!!");
        } else {
            reject(new Error("Oops!.. Number must be less than 5"));
        }
    });

    return customPromise;
}

getSumNum(5, 1)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("OOPS ERROR");
    });
