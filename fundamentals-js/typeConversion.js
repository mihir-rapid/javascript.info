// string conversion
let value = true
console.log(typeof value);

value = String(value)
console.log(typeof value);

// numeric conversion
console.log("6" / "2");

let str = "123"
console.log(typeof str);

let num = Number(str)
console.log(typeof num);

let age = Number("twenty") // NaN
console.log(age);

console.log(Number("   123   "));   // 123
console.log(Number("123z"));    // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0

// Boolean Conversion
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));   // false