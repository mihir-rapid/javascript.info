// arr.concat(arr1, arr2)

let arr = [1, 2, 3]
let arr1 = [4, 5, 6]
let arr2 = [7, 8, 9]

let fullArr = arr.concat(arr1, arr2)
console.log(fullArr);

// 

// find(), findIndex() & findLastIndex()

let users = [
    { id: 1, name: "Mihir"},
    { id: 2, name: "Harshil"},
    { id: 3, name: "Nishant"},
    { id: 4, name: "Mihir"}
]

let user = users.find((index) => {
    return index.id = 3
})

console.log(user);

let user2 = users.findIndex((index) => {
    return index.id = 1
})

console.log(user2);

// TypeError: <node env>
// let user3 = users.findLastIndex((index) => {
//     return index.name == "Mihir"
// })

// console.log(user3);

// arr.forEach()

let friends = ["Mihir", "Nishant", "Harshil", "Aman", "Kamal", "Rohan", "Sonu", "Samay", "Krish", "Sanjay"]

friends.forEach((item, index, array) => {
    console.log(`${item} : ${index} : [${array}]`);
})


// includes(), indexOf()

let cart = ["monitor", "cpu", "keyboard", "mouse", "adapter"]

console.log(cart.includes("mouse"));

console.log(cart.indexOf("monitor"));
console.log(cart.indexOf("keyboard"));
console.log(cart.indexOf("adapter"));