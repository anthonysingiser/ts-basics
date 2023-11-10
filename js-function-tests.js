const { getName } = require("./functions")

console.log(
    getName({
        first: "a",
        last: "b"
    })
)
//proof of typechecking happening only at compile time, and not at run time
console.log(getName())
