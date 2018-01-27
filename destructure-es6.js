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
