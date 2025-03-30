let someValue : any = "this is a string"

// let someValue : any = 5222;  
// Cause undefine in output

let strLength : number = (someValue as string).length;
console.log (strLength);


let anotherValue: any = "another string";
let anotherStrLength: number = (<string>anotherValue).length;

console.log(anotherStrLength);
//Outputs: 14



type techEmployee = {
    id: number;
    name:string;
    postion: string;
}

let employeeData: any = {
    id: 1,
    name: "Nick Smith",
    postion: "Developer"
}


// Use type assertion to treat employee Data as employee Type

let employee = employeeData as techEmployee;
console.log (employee.name)