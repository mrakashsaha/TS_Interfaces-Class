// If I use any there is no benifit of typeScript. Its like normal JavaScript. Its lead to runTime Errors. We should use Unknown type to not envolve into runtime error

let dynamicValue: any = " Hello, TypeScript";
dynamicValue = 42;
dynamicValue = true;



let uncertainValue: unknown = "Hello, TypeScript";

// console.log(uncertainValue.toUpperCase()); //Here it is showing runtime error

if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase()); //Safe to use as string
}



// Type Assertin can also be used
let lengthOfString: number = (uncertainValue as string).length;



// So we should use unknown, beacuse we can check the type explecitly;



// The Never type represents the values that never occur; 
// Used for functions that never return
// Error or infinite loops


function throwError (message: string) : never {
    throw new Error (message)
}


function infinitloop () : never {
    while (true) {

    }
}


function exhaustiveCheck (x: never) :never {
    throw new Error ("Unexpected value: " + x)
}

