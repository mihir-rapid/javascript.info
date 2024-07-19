// Chai Or Code (Numbers)

/*

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 123.8966
console.log(otherNum.toPrecision(4));   // returns string

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++

console.log(Math);

// Absolute value Math.abs()
console.log(Math.abs(-4));

// Math.round()
console.log(Math.round(4.6));

// Math.ceil()
console.log(Math.ceil(5.2));

// Math.floor()
console.log(Math.floor(5.8));

// Math.min()
console.log(Math.min(2, 4, 6, 1));

// Math.max()
console.log(Math.max(2, 4, 6, 1));

// Math.random()
// value is always between 0 to 1

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));

*/


// javascript.info <numbers>

// regular numbers in JS stored in 64 bit format

// more ways to write a number
let billion = 1000000000
let billion1 = 1_000_000_000

console.log(billion, billion1);

let billion2 = 1e9
console.log(billion2);

// e multiplies the number by 1 with given zeros count

console.log(1e3);

// in points <microseconds>

let mcs = 0.0000001
let mcs1 = 1e-6
console.log(mcs, mcs1);


// toString(base)

let num = 255
console.log(num.toString(16));  // Hex
console.log(num.toString(2));   // Binary


// Rounding numbers <Math Library>

console.log(Math.floor(3.9));   // rounds down to th lowest integer value
console.log(Math.ceil(3.1));    // rounds down to th greatest integer value
console.log(Math.round(3.3));   // rounds to the nearest integer value
console.log(Math.round(3.7));   
console.log(Math.trunc(3.1));   // removes everything after decimal point without rounding

// other Math functions

console.log(Math.min(1, 2, 3, 4, 5));   // 1
console.log(Math.max(1, 2, 3, 4, 5));   // 5
console.log(Math.min(1, 2, -3, 4, 5));   // -3
console.log(Math.pow(2, 10));

// example
// get random number between 1 to 10

let random1to10 = Math.floor(Math.random() * 10 + 1)
console.log(random1to10);

// get random number between two values

let min = 10
let max = 20
let random10to20 = Math.floor(Math.random() * (max - min + 1) + min)
console.log(random10to20);


// toFixed(n)
let num1 = 12.36;
console.log(typeof num1);   // number
console.log(typeof num1.toFixed(1));   // rounds the number to n digits after the point and returns "string"
console.log(num1.toFixed(5));   // 12.36000


// Imprecise calculations

console.log(1e500); // Infinity
console.log(typeof 1e500);  // "number"
console.log(1e500.toString().length);   


// isFinite() & isNaN()

console.log(isNaN(NaN));    // true
console.log(isNaN("str"));  // true

console.log(NaN === NaN);
// Value of NaN is unique is not equal to anything including itself

console.log(isFinite("15"));    // true
console.log(isFinite("str"));   // false, special value NaN
console.log(isFinite(Infinity));    // false, special value Inifinity

let a = Number.isNaN("str")
let b = isNaN("str")
console.log(typeof a);
console.log(typeof b);


// parseInt() & parseFloat()

// problem
console.log(+"100px");

// solution is parseInt() & parseFloat()
console.log(parseInt('100px'));
console.log(parseFloat('12.5em'));
console.log(parseInt('12.3'));
console.log(parseFloat('12.3.4'));

console.log(parseInt('a123'));  // NaN, first symbol stops the process


// The second argument of => parseInt(str, radix)

console.log(parseInt('0xff', 16));  // 255 
console.log(parseInt('ff', 16));    // 255
console.log(parseInt('2n9c', 36));  // 123456


let mobile = "9099197117"
console.log(typeof mobile);

mobile = parseInt(mobile)
console.log(typeof mobile);

// Tasks

// task-1
let x = +prompt("Enter a?")
let y = +prompt("Enter b?")
console.log(x+y);

// task-2
console.log(6.35.toFixed(1));

// task-3
function readNumber() {
    let num
    do {
        num = +prompt("Enter a number?", 0)
    } while(!isFinite(num))

    if (num === null || num === '') return null;

    return +num
}

alert(`Read: ${readNumber()}`)


// task-4
function main(a, b) {
    let min = a
    let max = b
    console.log(Math.floor(Math.random() * (max - min + 1) + min))
}
main(10, 20)

// task-5
function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
console.log( randomInteger(1, 3));