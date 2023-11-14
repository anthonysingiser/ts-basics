interface Coordinate {
    x: number;
    y: number;
}
//typing a function that accepts an object and returns Coordinate object
function parseCoordinateFromObject(obj: Coordinate): Coordinate{
    return {
        ...obj,
    }
}
//typing a function that accepts two numbers and returns a Coordinate object
function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return {
        x,
        y,
    }
}

//function parseCoordinate(obj: Coordinate): Coordinate;
//function parseCoordinate(x: number, y: number): Coordinate;
//function parseCoordinate(str: string): Coordinate;
//typing a function parseCoordinate that is capable of accepting one object or two numbers as arguments

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };
    if (typeof arg1 === 'string') {
        (arg1 as string).split(',').forEach((str) => {
          const [key, value] = str.split(':');
          coord[key as "x" | "y"] = parseInt(value, 10);
        });
    } else if (typeof arg1 === 'object') {
        coord = {
            ...(arg1 as Coordinate)
        }
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        };
    }
    return coord;
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({x: 34, y:65}))
console.log(parseCoordinate("x:12,y:22"))