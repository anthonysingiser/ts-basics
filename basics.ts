// TypeScript Basics

//typing a variable
let userName: string = "Anthony";
let hasLoggedIn: boolean = true;

console.log(userName);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

//typing an array
const names: string[] = userName.split(" ");
//typing an array of numbers
const myValues: Array<number> = [1, 2, 3];

//typing an object with a specific structure
interface Person {
    firstName: string;
    lastName: string;
    cool: boolean;
}
//using that type to create an object
const myPerson: Person = {
    firstName: "Anthony",
    lastName: "Singiser",
    cool: true
}
//constructing a type with a set of properties<number> of a type <string>
const ids: Record<number, string> = {
    10: "a",
    20: "b",
}
//using the type to mutate the object
ids[30] = "c";

//if loops are also type aware, and will throw errors if the type is not correct
if(ids[30] === "D") {

}

//ts will infer what the type is from the return value
[1, 2, 3].forEach((v) => console.log(v));

//ts will infer what the type is from the return value
const out = [4, 5, 6].map((v) => `${v * 10}`);

