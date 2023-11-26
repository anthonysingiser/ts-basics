// const beforeLoad = "beforeLoad";
// const loading = "loading";
// const loaded = "loaded";

enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded"   
}

const englishLoadingStates = {
    [LoadingState.beforeLoad]: "Before Load"
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeLoad))

console.log(englishLoadingStates[LoadingState.beforeLoad])

// Literal Types

function rollDice(dice: 1 | 2 | 3): number {
    let total = 0;
    for(let i = 0; i < dice; i++) {
        total += Math.floor(Math.random() * 5) + 1;
    }
    return total
}

console.log(rollDice(3))

// function overloading with overload signatures, arguments are checked 
// against signatures from top to bottom and the first one that matches is used 
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent("addToCart", { productId: 1423 })
sendEvent("checkout", { cartCount: 23 })