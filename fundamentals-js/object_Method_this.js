// "use strict"
// A function that is a property of an object is called it's method 

let user = {
    name: "Mihir",
    age: 20
}

// user.sayHi = function() {
//     console.log("Hi");
// }

// user.sayHi()

function sayHi() {
    console.log("Heyya");
}

user.sayHi = sayHi
user.sayHi()

// Method shorthand

let user1 = {
    sayHi: function() {
        console.log("Hello");
    },
    sayHi() {
        console.log("Helloo");
    },
    sayHi: () => {
        console.log("Hellooo");
    }
}

user1.sayHi()


// "this" in methods

let user2 = {
    name: "Mihir",
    age: 20,
    sayHi() {
        console.log(this.name)  // user.name
    }
}
user2.sayHi()

let admin1 = user2
user2 = null

admin1.sayHi()   // TypeError: Cannot read property 'name' of null

// "this" is not bound

function sayHi() {
    console.log(this.name);
}   // No Error

// value of "this" evaluated during the run-time depending on the context

// Example
let user3 = { name: "John" }
let admin = { name: "Admin" }

function sayHi() {
    console.log(this.name);
}

user3.fn = sayHi
admin.fn = sayHi

user3.fn()
admin.fn()
admin["fn"]()

// calling witout an object

function main() {
    console.log(this);
}
main()  // undefined in strict mode (browser)


// Arrow function have no "this"

// arrow function don't have their "own" this
// if we reference this from arrow fn, "this" taken from outer "normal" function

let user4 =  {
    firstName: "Mihir",
    sayHi() {
        let arrow = () => {
            console.log(this.firstName);
        }
        arrow()
    }
}
user4.sayHi()


// other Object Methods

let prices = {
    mobile: 15000,
    tv: 25000,
    computer: 50000,
    ps5: 100000,
    camera: 75000,
    laptop: 80000,
    accesories: 500,
    shop: "Modern Electronics"
}

let keys = Object.keys(prices)
let values = Object.values(prices)
let entries = Object.entries(prices)

console.log(keys);
console.log(values);
console.log(entries);


// Summary

// function that are stored in object properties are called "methods"
// Methods allow objects to "act" like object.doSomething()
// Methods can reference the object as this

// The value of this is defined at run-time



// Tasks

// task-1

function makeUser() {
    return {
        name: "John",
        ref: this
    }
}

let user5 = makeUser()
// console.log(this.ref.name); // TypeError: Cannot read property 'name' of undefined

// task-2

let calculator = {
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
    read() {
        this.a = 12 // +prompt("Enter a: ", 0)
        this.b = 10 // +prompt("Enter b: ", 0)
    }
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())

// task-3

let ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep: function() {
        console.log(this.step);
        return this
    }
}

ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep()