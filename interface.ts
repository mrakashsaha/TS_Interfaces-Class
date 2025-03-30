interface Greetable {
    greet (): void;
}

class Developer implements Greetable {
    constructor (public username: string) {}

    greet() {
        console.log(`Hello I am ${this.username} and I love to code`)
    }
}

const dev = new Developer ("Ts lover");
dev.greet();
