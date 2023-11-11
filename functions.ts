//typing a function, parameters as well as the return must be typed
//without typing the function the function parameters will have the 'any' type 
function addNumbers(a: number, b: number): number {
    return a + b;
}

export default addNumbers;

//typing function with const format
export const addStrings = (str1: string, str2: string): string =>
    `${str1} ${str2}`;

// union types, here param will accept any of the qualifying types
export const format = (title: string, param: string | number): string =>
    `${title} ${param}`

//typing for a function that does not return anything
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param))
}

//typing for a function that returns a promise
export const fetchData = (url: string): Promise<string> => Promise.resolve(`data from ${url}`)

//typing a function with rest paramters
function introduce(salutation: string, ...names:string[]): string {
    return `${salutation} ${names.join(" ")}`
}

export function getName(user: { first: string, last: string}): string {
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}