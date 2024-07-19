// In JS textual data is stored as string

// Quotes
let single = 'single-quoted'
let double = 'double-quoted'
let backticks = `backticks` // template literals

function sum(a, b) {
    return a + b
}
console.log(`1 + 2 = ${sum(1, 2)}`);

// backticks also allow a string to span multiple lines

let guestList = `Guests:
    * John
    * Pete
    * Mary`
console.log(guestList);

// Special characters
// \n => line break = "newline character"

let guestList1 = "Guests:\n * John\n * Pete\n * Mary"
console.log(guestList1);

let str1 = "Hello\nWorld"
let str2 = `Hello
World`
console.log(str1 == str2);

// Other special characters
/*
    *   \n => New line
    *   \t => tab
    *   \b, \f, \v => backspace, form-feed, vertical tab
     
    notes => 
        * "\" is also called in "escape character"
*/

console.log(`The backslash: \\`);

console.log(`I\`m good`);

// String length
console.log("My\n".length); //3


// Accesing characters

let str = `Hello`
console.log(str[0]);
console.log(str.charAt(0));

// the last character
console.log(str[str.length-1]);
console.log(str.charAt(-1));

// square bracket always return "undefined" for negetive index
let str3 = `Hello`
console.log(str3[-2]);
console.log(str3.charAt(-2));   // doubt

for (let char of str3) {
    console.log(char);
}


// String are immutable
// string can't be changed in JS, impossible to change a character

// let str = 'Hi'
// str[0] = 'h' // TypeError in "use strict"
// console.log(str[0]);

// workaround <changing string char>
let str4 = 'Hi'
str4 = 'h' + str4[1]
console.log(str4);


// Changing the case

console.log('Interface'.toUpperCase());
console.log('Interface'.toLowerCase());

// <selected char from string>
console.log('interface'[0].toUpperCase());  // I


// Searching for substring

// str.indexOf
// => str.indexOf(substr, pos)

let str5 = 'Widget with id'
console.log(str5.indexOf('Widget')); // 0, found at beginning
console.log(str5.indexOf('widget')); // -1, not found, "case sensitive"

console.log(str5.indexOf('id', 2)); // doubt


// indexOf in Loop

let string = 'As sly as fox, as strong as an fox'
let target = 'as'
let pos = 0
while (true) {
    let foundPos = string.indexOf(target, pos)
    if (foundPos == -1) break

    // console.log(`Found at ${foundPos}`);
    pos = foundPos + 1
}

// shorter version
let string1 = 'As sly as fox, as strong as an fox'
let target1 = 'as'
let pos1 = -1
while((pos1 = string1.indexOf(target1, pos1 + 1)) != -1) {
    console.log(`found at ${pos1}`);
}

// inconvenience with indexOf in the "if", dosen't work with 0 'cause it's falsy value

// let str = 'Widget with id'
// if (str.indexOf('Widget')) {
//     console.log('we fount it'); // doesn't work
// }

// we should check for (-1)
let string2 = "Widget with id"
if (string2.indexOf("Widget") != -1) {
    console.log("We found it");
}


// includes, startsWith, endsWith

console.log("Widget with id".includes("id")); // true
console.log("Hello, World".includes("Earth")); // false

console.log("Widget".includes("id"));   // true
console.log("Widget".includes("id", 3));    // false, from 3 position there is no "id"

console.log("Widget".startsWith("Wid"));    // "Wid"get
console.log("Widget".endsWith("get"));      // Wid"get"


// Getting a substring

let myStr = "stringify"
console.log(myStr.slice(0, 5)); // 0-5, not including 5, "stin"
console.log(myStr.slice(0, 1)); // 0-1, not including 1, "s"

// if there is no second arg, slice goes till the end 
console.log(myStr.slice(2));    // ringify

// * slice supports "negetive" values
console.log(myStr.slice(-4, -1));   // gif


// substring(start, [, end])
// => returns the part of string between "start" and "end" (not including end)
// * allows start to be greater than end

let myStr1 = "stringify"
console.log(myStr1.substring(2, 6));    // ring
console.log(myStr1.substring(6, 2));    // ring


// substr(start [, length])
// => returns the part of string from "start" with given length
// => only specify the length instead on ending pos

let myStr2 = "stringify"
console.log(myStr2.substr(2, 4));   // ring

// negetive arg is allows => start from end
console.log(myStr2.substr(-4, 2));  // gi


// Comparing string
console.log('a' > 'Z');

// str.codePointAt(pos)
// => returns a decimal number representing the code for the char at position "pos"
console.log("Z".codePointAt(0));    // 90
console.log("z".codePointAt(0));    // 122
console.log("z".codePointAt(0).toString(16));   // 7a

// str.fromCodePoint(code)
// => creates a character by it's numeric "code"
console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(122));
console.log(String.fromCodePoint(0x5a));

// example
let newStr = ''
for (let i=65; i<=220; i++) {
    newStr += String.fromCodePoint(i)
}
console.log(newStr);

// other string methods

// str.trim()
let myArr1 = '  mihir   '
console.log(myArr1.trim());

// str.repeat(n)
console.log(myArr1.repeat(10));

// str.replace(element, value)

let myUrl = "https://mihir%20xtc.com"   // mihir%20xtc
let refinedURL = myUrl.replace('%20', '-')  // mihir-xtc
console.log(refinedURL);


// Tasks

// task-1
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(ucFirst("mihir"))

// task-2
function checkSpam(str) {
    let newStr = str.toLowerCase()
    if (newStr.includes("viagra") || newStr.includes("xxxxx")) {
        return true
    }
    return false
}
console.log(checkSpam("buy ViAgRa now"))

// task-3
function main(str, max) {
    if (str.length > max) {
        let newStr = str.slice(0, max -1) + "..."
        console.log(newStr);
    } else {
        console.log(str);
    }
}

main("What I'd like to tell on this topic is:", 20)

// task-4
function extractCurrencyValue(str) {
    return +str.slice(1)
}
console.log(extractCurrencyValue('₹120'))


// More String Exercises

// 1. write a function to check whether an input is string or not

function checkString(str) {
    if (typeof str === 'string') {
        return true
    } else {
        return false
    }
}
console.log(checkString("mihir"));
console.log(checkString([1, 2, 3]));

// 2. write a function to check whether string is blank or not

function checkBlank(str) {
    if (str.length > 0) {
        return false
    } else {
        return true
    }
}
console.log(checkBlank(""));

// 3. write a function to convert string into array of words

function arrayOfWords(str) {
    return str.trim().split(' ')
}
console.log(arrayOfWords("Mihir Menon"));