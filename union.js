"use strict";
function formatInput(input) {
    if (typeof input === "string") {
        console.log(input.toLowerCase());
    }
    else {
        console.log(input.toFixed(2));
    }
}
formatInput("Hello, TypeScript");
formatInput(2.63666);
