// Terms: "unary", "binary", "operand"

// "Unary": operator is unary if it has single operand
let a = 1
A = -a
console.log(A); //  -1, unary negation applied

// "Binary": operator is binary if has two operands
let x = 1, y = 3
console.log(y-x);

// "String" concatenation with binary +

// if any of the operands is a string, then the other one is converted to a string too.
console.log(2 + 2 + '1');   // 41
console.log('1' + 2 + 2);   // 122

// Numeric conversion, unary +

// converts non-numbers
console.log(+true);
console.log(+"");

let num = "99"
console.log(typeof num);

num = +num
console.log(typeof num);

// Assignment = returns a value
let b = 1
let c = 2
let d = 3 - (b = c + 1)
console.log(b); // 3
console.log(d); // 0

// Chaining assignment
let o, p, q
o = p = q = 2 + 2
console.log(o, p, q);

// Modify-in-place
let n = 2
n = n + 2
n = n * 2
console.log(n);

n += 2
console.log(n); // 10

n *= 2
console.log(n); // 20

// Increment/Decrement

let counter = 2
console.log(counter++); // 2, returns prefix value
console.log(++counter); // 4, returns postfix value

let counter1 = 2
console.log(counter1--);    // returns 2
console.log(counter1);  // now value is 1
console.log(--counter1);    // so ans is 0

// incement/decrement along with other operators
let num1 = 1
console.log(2 * ++num1) // 4

let num2 = 1
console.log(2 * num2++);

// Bitwise oprator
// - AND (&)
// - OR (|)
// - XOR (^)
// - NOT (~)
// - LEFT SHIFT (<<)
// - RIGHT SHIFT (>>)
// - ZERO-FILL RIGHT SHIFT (>>>)

let result = (1 + 2, 3 + 4)
console.log(result);

// in multiple lines
for (a=1, b=3, c=a*b; a <= 10; a++) {
    console.log(c);
}   // 10

// Tasks

// task-1
let a1 = 1
let b1 = 1
let c1 = ++a1 // 2
let d1 = b1++ // 1

// task-2
let x1 = 2
let y1 = 1 + (x1 *= 2)
console.log(x1); // 4
console.log(y1); // 5

// task-3
console.log("" + 1 + 0);    // 10
console.log("" - 1 + 0);    // -1
console.log(true + false);  // 1
console.log("6" / "3");     // 2
console.log("2" * "3");     // 6
console.log(4 + 5 + "px");  // 9px
console.log("$" + 4 + 5);   // $45
console.log("4" - 2);       // 2
console.log("4px" - 2);     // NaN
console.log("   -9  " + 5); //  +9  5
console.log("   -9  " - 5); // -14
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN
console.log("\t \n" - 2);   // -2

// task-4
let n1 = "1"
let n2 = "2"

console.log(+n1 + +n2);