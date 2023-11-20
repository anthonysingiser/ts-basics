//define a type of array that contains three numbers named ThreeDCoordinate
//this finite sequence of values is a tuple
type ThreeDCoordinate = [x:number, y:number, z:number];


//define a function that accepts two ThreeDCoordinates and returns a ThreeDCoordinate that is the sum of both
function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2]
    ]
}

console.log(add3DCoordinate([0, 50, 0], [10, 20, 30]))

//state function that takes a string and returns a tuple of two functions, the first a function that returns the string, and the second a function that sets the string
function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial
    return [
        () => str, 
        (v: string) => {
            str = v;
        }
    ]
}

//in practice 

const [str1getter, str1setter] = simpleStringState("Hello")
const [str2getter, str2setter] = simpleStringState("Tony")

console.log(str2getter())
console.log(str1getter())

str1setter("Goodbye")

console.log(str1getter())
console.log(str2getter())