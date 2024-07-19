// Objects are used to store keyed collection of various data and more complex entities.

// A property is "key:vlaue" pair where key is "string" and value can be anything

let user = new Object()
user.name = "Mihir Menon"
user.username = "mihirxtc"
user.email = "mihirxtc@gmail.com"
user.age = 20
user.location = "23.0225° N, 72.5714° E"
user.isActiveDaily = true
console.log(user)

let user1 = {
    name: "Water Bottle",
    username: "water01bottle",
    email: "waterbottle@gmail.com",
    age: 18,
    location: "23.0225° N, 72.5714° E",
    isActiveDaily: false
}

// Square Brackets

let user2 = {}
user2["has job"] = true
console.log(user2['has job']);
// delete user['has job']
console.log(user2);
let key = 'has job'
console.log(user2[key]);


// question savan bhai asked
// let obj = {
//     fn1: () => {
//         console.log("One");
//     },
//     fn2: () => {
//         console.log("Two");
//     },
//     fn3: () => {
//         console.log("Three");
//     }
// }

// let res = "fn1" // prompt("Enter function name to execute")
// alert(obj[res]())

let user3 = {
    name: "Water Bottle",
    username: "water01bottle",
    email: "waterbottle@gmail.com",
    age: 18,
    location: "23.0225° N, 72.5714° E",
    isActiveDaily: false
}
let res = "name" //prompt("What do you want to know about the user?", "name")
console.log(user3[res])    // dot (.) cannot be used in similar way

// compute properties

// using more complex objects
let fruit = "apple"
let bag = {
    [fruit + 'Computers']: 5
}
console.log(bag.appleComputers)

// propetry value shorthand

function makeUser(name, age) {
    return {
        name,
        age
    }
}

let user4 = makeUser("Mihir", 20)
console.log(user4);

// property names limitation

let obj = {
    for: 1,
    let: 2,
    return: 3
}
console.log(obj.for + obj.let + obj.return);

// keys are converted to string
let obj1 = {
    0: "test"
}
console.log(obj1[0]);
console.log(obj1["0"]);

// propetry existence test, "in" operator

let user5 = {}
console.log(user5.noSuchProperty === undefined); // true

// syntax
// "key" in object

let user6 = {
    name: "Mihir",
    age: 20
}
console.log("age" in user6)  // true
console.log("mouse" in user6);   // false

let key1 = "age"
console.log(key1 in user6);  // using var to reference value


// use-case of in

let obj2 = {
    test: undefined
}

console.log(obj2.test); // undefined
console.log("test" in obj2);


// for..in Loop

// syntax
// for (key in object) {
    //  code
// }

let user7 = {
    name: "Water Bottle",
    username: "water01bottle",
    email: "waterbottle@gmail.com",
    age: 18,
    location: "23.0225° N, 72.5714° E",
    isActiveDaily: false
}

for (let key in user7) {
    console.log(`${key} : ${user7[key]}`);
} 

// order like an object

// asceding sorted order
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Greater Britain",
    "91": "India",
    "1": "USA"
}
for (let code in codes) {
    console.log(code);
}

// if key are non-integer, they listed in creation order

let user8 = {
    name: "mouse",
    surname: "bottleneck"
}
user8.age = 1

for (let prop in user8) {
    console.log(prop);
}

// fix the problem of asceding order in integer
let codes1 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Greater Britain",
    "+91": "India",
    "+1": "USA"
}
for (let code in codes1) {
    console.log(code);
}

// Tasks

// task-1
let user10 = {}
user10.name = "John"
user10.surname = "Smith"
console.log(user10);

user10.name = "Pete"
console.log(user10);

delete user10.name
console.log(user10);

// task-2
function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

let myObj = {
    // name: "Mihir"
}
console.log(isEmpty(myObj));

// task-3
let salaries = {
    Mihir: 150000,
    Aryan: 100000,
    Anuj: 20000,
    Karan: 30000
}

let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}
console.log(sum);

// task-4
let price = {
    mobile: 15000,
    tv: 25000,
    computer: 50000,
    ps5: 100000,
    camera: 75000,
    laptop: 80000,
    accesories: 500,
    shop: "Modern Electronics"
}

console.log(price);

function multiplyValue(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}

multiplyValue(price)
console.log(price)