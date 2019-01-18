/* eslint-disable */

function countTo(input, max) {

    console.log(`before ${input}`);

    if(input < max) {
        const message = countTo(input + 1, max);
        console.log(message);
    }

    return `after ${input}`;
}

const message = countTo(0, 2);
console.log(message);