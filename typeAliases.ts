type Coord = [
    number,
    number,
    string,
    number,
    number,
    string
  ]
  
  let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
  let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];

//function types
// Math Operations
function add(a, b){return a+b }
function subtract(a, b){return a-b }
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function wrongAdd(a, b){return (a+b)+''}

// Add your function type below:
type OperatorFunction = (num1: number, num2: number) => number;


// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
  console.log('Now fill out this worksheet.');
}

// Call your functions below:
mathTutor(multiply)
//wrong add is attempting tpo add a string to a number
mathTutor(wrongAdd)