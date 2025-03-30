function formatInput (input: string | number) {
    if (typeof input === "string") {
        console.log (input.toLowerCase());
    }

    else {
        console.log(input.toFixed(2))
    }
}


formatInput("Hello, TypeScript");
formatInput(2.63666);