"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
//typing a function, parameters as well as the return must be typed
//without typing the function the function parameters will have the 'any' type 
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
//typing function with const format
var addStrings = function (str1, str2) {
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// union types, here param will accept any of the qualifying types
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
//typing for a function that does not return anything
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
//typing for a function that returns a promise
var fetchData = function (url) { return Promise.resolve("data from ".concat(url)); };
exports.fetchData = fetchData;
//typing a function with rest paramters
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
}
exports.getName = getName;
