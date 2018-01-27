/*jshint esversion: 6 */

/*
Destructuring Arrays (1-3)
*/

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [a, b, c] = things;  // Draws out the first three items in the array

/* Use destructuring to initialize the variables `one`, `two`, and `three`
* with the colors from the `things` array.
*/

const [one, , , two, , , , three] = things; // Commas skip items in an array

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);


// Destructuring with an object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};

const {type, color, karat} = gemstone;

console.log(type, color, karat); // Prints: quartz rose 21.29

// Iterate with for-of

 const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

 for (const day of days) {
     console.log(day[0].toUpperCase() + day.slice(1));
 }


/* ------------- Spread Operator
* Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
*/

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);

// The spread operator spreads an array into its parts. so...
console.log(...fruits); // prints: apples bananas pears - no commas, brackets
// So the spread operator is a good way to combine arrays


/*
 * ------------- Rest Parameter
 */
// The Rest parameter is kind of the opposite of spread - binds seperate items into an array
// In the following, the function can take any number of args, and they will all be
// combined into an array called nums

function average(...nums) {
  console.log(nums);
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total/nums.length || 0; // Zero covers the case of no args
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

/* ----------------------------- Default function parameters
Default function parameters are quite easy to read since they're placed in the function's parameter list:
*/

function greet(name = 'Student', greeting = 'Welcome') {
  console.log(`${greeting} ${name}!`);
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

/*Returns:
Welcome Student!
Welcome James!
Howdy Richard!
*/

function buildHouse({floors = 1, color = 'red', walls = 'brick'} = {}) {
  console.log(`Your house has ${floors} floor(s) with ${color} ${walls} walls.`);
}
buildHouse({floors: 3, color: 'yellow'});

function fooBar() {
  return 'fooBar';
}
fooBar();
