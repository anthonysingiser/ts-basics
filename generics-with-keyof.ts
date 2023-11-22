function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[], 
    key:KeyType
    ): DataType[KeyType][] {
    return items.map((item) => item[key])
}

const dogs = [
    { name: "Froggy", age: 8 },
    { name: "Bailey", age: 5 },
    { name: "Thor", age: 10 },
]

console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))

interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    addToCart: BaseEvent & { quantity: number; productID: string;},
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
    name: Name, 
    data: EventMap[Name]
    ): void {
    
    console.log([name, data])
}

sendEvent("addToCart", {productID: 'foo', user: 'bar', quantity: 1, time: 10})
sendEvent("checkout", {time: 20, user: 'bobby'})