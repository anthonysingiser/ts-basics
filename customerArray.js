let customersArray = [
    "Custy Stomer",
    "C. Oostomar",
    "C.U.S. Tomer",
    3432434,
    "Custo Mer",
    "Custopher Ustomer",
    3432435,
    "Kasti Yastimeur",
];

//Write Your Code here:
function checkCustomersArray() {
    customersArray.forEach(element => {
        if (typeof(element) === 'number') {
            console.log(`Type error: ${element} should be a string!`)
        }
    })
}
checkCustomersArray();

function stringPush(val) {
    if (typeof(val) === 'string') {
        customersArray.push(val)
    } else {
        console.log(`Type Error: the value ${val} is not a string`)
        return
    }
}
stringPush(3)