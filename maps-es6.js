/*jshint esversion: 6 */

// Maps are to objects as sets are to arrays
// Maps store key-value pairs
// Both keys and values can be objects, primitive values or a combination

const employees = new Map();

// Add to a map with the set() method

employees.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);

// Removing items
employees.delete('richard@udacity.com');
// Can also use employees.clear() to empty the map

// delete returns T or F, set returns the object itself, if successful

console.log(employees);

// has and get
console.log(employees.has('james.parkes@udacity.com'));
console.log(employees.get('james.parkes@udacity.com'));

// Iterating

let iteratorObjKeys = employees.keys();
console.log(iteratorObjKeys.next());

let iteratorObjValues = employees.values();
console.log(iteratorObjValues.next());

// for-of loop

for (let employee of employees) {
  console.log(employee);
}

// forEach loop
 employees.forEach((key, value) => console.log(key, value));

 // ------------------- WeakMaps
 //Only objects as keys, not iterable, no .clear() method

 const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
