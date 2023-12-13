interface LittleCat {
    name: string;
    breed: string
}

function makeLittleCat(name: string, breed: string): Readonly<LittleCat> {
    return {
        name, 
        breed
    }
}

const mittens = makeLittleCat("Mittens", "Tabby")
//mittens.name = "Joe" // error, the object is immutable after adding 'Readonly' to the return type of makeCat

function makeCoordinate(
    x: number, 
    y: number, 
    z: number
): readonly [number, number, number] {
    return [x, y, z]
}

const c1 = makeCoordinate(10, 20, 30 )
//c1[0] = 50 // error, after adding 'readonly' to the return type of makeCoordinate, the array is immutable

const reallyConst = [1,2,3] as const
//reallyConst[0] = 50 // error, now that we have added 'as const' to the array, it is immutable