"use strict";
class Developer {
    constructor(username) {
        this.username = username;
    }
    greet() {
        console.log(`Hello I am ${this.username} and I love to code`);
    }
}
const dev = new Developer("Ts lover");
dev.greet();
