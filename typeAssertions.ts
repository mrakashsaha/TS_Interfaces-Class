let someValue : any = "this is a string"

// let someValue : any = 5222;  
// Cause undefine in output

let strLength : number = (someValue as string).length;
console.log (strLength);


let anotherValue: any = "another string";
let anotherStrLength: number = (<string>anotherValue).length;

console.log(anotherStrLength);
//Outputs: 14