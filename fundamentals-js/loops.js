// // Infinite Loop
// for (;;) {
//     console.log("\tMihir");
// }

// Breaking the loop
let sum = 0
while (true) {
    let value
    if (!value) break;
    sum += value
}
console.log('Sum: ' + sum);

// Continue to next iteration
// It donse'nt stop the whole loop, instead it stops the current iteration and forces the loop to start a new one

for (let i=0; i<10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}

// Labels for break/continue

outer: for(let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, '');
        if (!input) break outer
    }
}
alert("Done!")

// Summary
// whlie: The condition is checked before each iteration
// do..while: The condition is checked after each iteration
// for (;;): The condition is checked before each iteration

// Tasks

// task-1
let i = 3
while (i) {
    console.log(i--);
}

// task-2
for (let i=2; i<=10; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}

// task-3
let x = 0
while (x < 3) {
    console.log(`number ${x}`);
    x++
}

// task-4
let num
do {
    num = prompt("Enter a number greater than 100?", 0)
} while(num <= 100 && num)

// task-5
let n = 10
nextPrime:
for (let i=2; i<=n; i++) {
    for (let j=2; j<i; j++) {
        if (i % j == 0) continue nextPrime
    }
    console.log(i);
}
