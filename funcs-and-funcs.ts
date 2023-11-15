//typing a function that returns a function
export function printToFile(text: string, callback: () => void): void {
    callback()
}

/*create type for a function that takes a number 
as a parameter and returns a number*/
type MutationFunction = (v: number) => number

export function arrayMutate(
    numbers: number[], 
    mutate: MutationFunction
): number[] {
    return numbers.map(mutate)    
}

//declaring a new function and using the MutationFunction type
const myNewMutateFunc: MutationFunction = (v: number) => v * 100

console.log(myNewMutateFunc(10))
console.log(arrayMutate([1,20,3], (v) => v * 10))

export function createAdder(num: number): (val: number) => number {
    return (val: number) => num + val
}

const addOne = createAdder(1)
console.log(addOne(55))