//  < ** code with harry ** >

/*
let arr = [1, 2, 4, 5, 7]

console.log(arr);
console.log(typeof arr);
console.log(arr.length);

// Accesing element of array
console.log(arr[0]);

// Methods of array

// arr.toString() => converts array into string
console.log(arr.toString());

// arr.join() => join the array
console.log(arr.join(" and "));

// Modification Methods

// arr.pop() => removes last element from array
let a = [1, 2, 3, 4, 5, 6]
a.pop()
console.log(a);

// arr.push() => adds a element to last
a.push("mouse")
console.log(a);

// arr.shift() => removes element from "start"
a.shift()
console.log(a);

// arr.unshift() => adds element at "start"
a.unshift("bottle")
console.log(a);

// * pop() = shift()
// * push() = unshift()


// concat() => joins array to the given array <returns a new array, dose not change original array>

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [7, 8, 9]

console.log(a1.concat(a2, a3))   // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// splice()
// => used to add new items to array
// arr.splice(2, 1, 23, 24) where
// 2 => position to add
// 1 => no. of elements to remove
// 23, 24 => elements to be added

const numbers = [1, 2, 3, 4, 5]
numbers.splice(1, 2)
console.log(numbers);


// slice()
// => slices out a piece from an array, <creates a new array>

const num = [1, 2, 3, 4]
console.log(num.slice(2));  // [3, 4]
console.log(num.slice(1, 3));   // [2, 3]

// reverse()
// => reverse the source array

const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(n1.reverse());


let array = [1, 95, 5, 7, 88]
for (let i=0; i<array.length; i++) {
    console.log(array[i]);
}

array.forEach((element, index, array) => {
    console.log(element, index, array);
})


// map()

// using loop
let numArr = [1, 3, 5, 7, 9]
// let newArr = []
// for (let i=0; i<numArr.length; i++) {
//     const element = numArr[i]
//     newArr.push(element ** 2)
// }
// console.log(newArr);

let newArr = numArr.map(element => element ** 2)
console.log(newArr);


// filter()

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const even = allNumbers.filter(n => n%2==0)
console.log(even);

const odd = allNumbers.filter(n => n%2!=0)
console.log(odd);

*/


// < ** javascript.info ** >

// array allows you to store keyed collections of value

// creating array

// simple syntax
let frds = ["Mihir", "Harshil", "Nishant"]
console.log(frds);

// using array constructor
let friends = new Array();
friends.push("Mihir")
friends.push("Nishant")
friends.push("Harshil")

console.log(friends);

// accessing array elements
console.log(frds[0]);
console.log(frds[1]);
console.log(frds[2]);

// replacing elements
frds[0] = "John"
console.log(frds);

// adding new element
frds[3] = "Mihir"
console.log(frds);

// counts of element in array <length>
console.log(frds.length);

// array can store value of anytype

let arr = ['Mihir', 20, { username: 'Mihir', email: 'mihirxtc@gmail.com' }, 20.8, true, 2003]
console.log(arr);

// get last element
console.log(arr[arr.length - 1]) // writing var name twice

// arr.at(-pos) <allows negetive index>
console.log(arr.at(-1));


// Methods
// * push()
// * pop()
// * shift()
// * unshift()

// push() = unshift()
// pop() = shift()

// * End of array

// push()
// => appends element to the end of array
// => fruits.push("banana") == fruits[fruits.length] = "banana"
let fruits = ["apple", "mango", "cherry"]
fruits.push("banana")
console.log("push:" ,fruits);

// pop()
// => modifies array by removing last element
// fruits.pop() == fruits.at(-1)
fruits.pop()
console.log("pop:", fruits);

// * Beginning of array

// shift()
// => extract the first element of array & returns it
fruits.shift()
console.log("shift:", fruits);

// unshift()
// => adds element to the beginning of array
fruits.unshift("pineapple")
console.log("unshift:", fruits);

// * push() & unshift() can add multiple element at once
fruits.push("lemon", "peach", "kiwi")
fruits.unshift("Greps", "Ananas", "Watermelon")
console.log(fruits);

// * Cyling over array element

// simple for loop
console.log("++++++ for loop ++++++");
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// for of Loop
console.log("++++++ for..of ++++++");
for (let fruit of fruits) {
    console.log(fruit);
}

// for in Loop
console.log("++++++ for..in ++++++");
for (let key in fruits) {
    console.log(fruits[key]);
}

// * for..in loop iterates over all properties, not only numeric values
// * for.in loop optimized for generic objects, not arrays


// Word about Length

// length = max index + 1 = 124 + 1

console.log(fruits.length);
fruits[124] = "Strawberry"  
console.log(fruits.length);

// Length property is writable

let arr1 = [1, 2, 3, 4, 5]
console.log(arr1.length);
arr1.length = 2     // truncate array
console.log(arr1);

arr1.length = 5 // returns length back
console.log(arr1[2]);   // undefined : value do not return

// simplest way to clear array
arr1.length = 0
console.log(arr1);


// new Array() syntax
arr1 = new Array(2) // stores as length not number
console.log(arr1[0]);   // undefined
console.log(arr1); // gives length


// Multidimensional Array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix);
console.log(matrix.length);

// accessing multidimensional array
console.log(matrix[0]); // [1, 2, 3], gives array on 0 index
console.log(matrix[0][0]); // 1, gives element on 0 index on 0th element


// toString()

let arr2 = [1, 2, 3]
console.log(arr2);
arr2 = String(arr2)
console.log(arr2);


// Tasks

// task-2
/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll  */

const styles = ["Jazz", "Blues"]
console.log(styles);
styles.push("Rock-n-Roll")
console.log(styles);
styles[1] = "Classics"
console.log(styles);
styles.shift()
console.log(styles);
styles.unshift("Rap", "Reggae")
console.log(styles);


// task-3
let newArr = [1, 2]
newArr.push(function() {
    console.log(this);
})
console.log(newArr);
console.log(newArr[2]);
newArr[2]()


// task-4
// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.

function sumInput() {
    let numbers = []
    while (true) {
        let element = prompt("Enter an element", 0)
        if (element == '' || element == null || !isFinite(element)) break

        numbers.push(+element)
    }

    let sum = 0
    for (let number of numbers) {
        sum += number
    }

    return sum
}

alert(sumInput())


// task-5

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0


// slow solution

function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
}
  
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

// fast solution

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
