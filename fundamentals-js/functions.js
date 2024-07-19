// simple function
function printHelloWorld() {
    console.log("Hello, World");
}
// printHelloWorld  // referencing function
printHelloWorld()   // calling function

// parameterized function
function sumOfTwoNumbers(num1, num2) {
    let result =  num1 + num2
    return result
}
const result = sumOfTwoNumbers(2, 5)
console.log(result);

// 
function loginUserMessage(username = "user") {
    if(!username) {
        console.log("Please enter username!");
        return
    }
    return `${username} logged in`
}
console.log(loginUserMessage())

// Advance Chai Or Code

// rest operator
function calculateCartPrice(num1, num2, ...num3) {
    return num3
}
console.log(calculateCartPrice(200, 500, 700, 1000, 1300)); // last 3 will be in rest operator var


// handeling object with functions

const user = {
    username: "mihirxtc",
    email: "mihirxtc@gmail.com"
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} & email is ${anyObject.email}`);
}
// handleObject(user)
handleObject({
    username: "waterbottle7",
    email: "waterbottlemain@gmail.com"
})

// handeling array with functions

const myNewArray = [200, 500, 700]

function returnArrayValue(getArray) {
    return getArray
}
console.log(returnArrayValue(myNewArray));

// Tasks

// task-1
function checkAge(age) {
    if (age > 18) {
        return true
    }
    return console.log("Do you have permission?");
}
checkAge()

// task-2
function checkAge1(age) {
    return (age > 18) ? true : console.log("Did your parent's allowed you?")
}
checkAge1()

function checkAge2(age) {
    return (age > 18) || console.log("Did your parent's allowed you?");
}
checkAge2()

// task-3
function min(a, b) {
    if (a < b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
min(-2, -1)

function min1(a, b) {
    return a < b ? console.log(a) : console.log(b);
}
min1(10, 5)

// task-4
function pow(x, n) {
    let result = x;
    for (let i=1; i<n; i++) {
        result *= x;
    }
    return result
}

let x = 3
let n = 2

if (n < 1) {
    console.log("Use a positive number!");
} else {
    console.log(pow(x, n));
}