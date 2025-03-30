"use strict";
let someValue = "this is a string";
// let someValue : any = 5222;  
// Cause undefine in output
let strLength = someValue.length;
console.log(strLength);
let anotherValue = "another string";
let anotherStrLength = anotherValue.length;
console.log(anotherStrLength);
let employeeData = {
    id: 1,
    name: "Nick Smith",
    postion: "Developer"
};
// Use type assertion to treat employee Data as employee Type
let employee = employeeData;
console.log(employee.name);
