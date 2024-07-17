// Primitive type
// total 7: string, number, bigint, boolean, symbol, null, undefined

let john = {
    name: "John",
    sayHi: function() {
        console.log("Hey Buddy");
    }
}
john.sayHi()

// Objects are "heavier" than primitives.

// A primitive as an object

// primitives provides difference sets of methods

let str = "Hello"
console.log(str.toUpperCase());

let n = 1.23456
console.log(n.toFixed(2));

// Constructor String/Number/Boolean

console.log(typeof 0);  // number   
console.log(typeof new Number(0));  // object

let zero = new Number(0)
if (zero) {
    console.log("Zero is truthy");
}

// using constructor is not a good practice in JS

// null/undefined have no methods

// Task

let string = "Hello"
string.test = 5
console.log(string.test);   // give Error in strict mode