export class Person {
    private name: string;
    public age: number;
    protected readonly birthYear: number;


    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
        this.birthYear = new Date().getFullYear() - age;
    }

    greet () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}


const p1 = new Person ("Akash", 23);

p1.greet();