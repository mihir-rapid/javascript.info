// four logical operators
// OR (||)
// AND (&&)
// NOT (!)
// Nullish Coalescing (??)

// OR (||) finds first truthy value

true || console.log("not printed");
false || console.log("printed");

// AND (&&) finds first falsy value

true && console.log("not printed");
false && console.log("printed");

// Precedence of AND (&&) is higher than OR (||)

let t = !!true
console.log(!false === t);

console.log(!!null);

console.log(!Boolean(NaN));

// Tasks

// task-1
console.log(null || 2 || undefined);    // first truthy value

// task-2
console.log(console.log(1) || 2 || console.log(3)); // second operand is truthy so execution is halted

// task-3
console.log(1 && null && 2);

// task-4
console.log(console.log(1) && console.log(2));  // alert(1) returns undefind, and && search for falsy value, so 1, undefined and it's done

// task-5
console.log(null || 2 && 3 || 4)

// task-6
if (age >= 14 && age <= 90) {}

// task-7
if (!(age >= 14 && age <= 90)) {}
if (age < 14 || age > 90) {} 

// task-8
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}