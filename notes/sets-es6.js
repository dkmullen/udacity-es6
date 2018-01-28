/*jshint esversion: 6 */

// Sets - new to JS, similar to an array, but...
// Each item must be unique (like a mathematical set)
// Can't access items by position (not index-based)  or individually for that matter

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);
// Duplicate entry automatically gets dropped, with no err msg

// No pushing!
games.add('Monopoly'); // one item at a time, apparently
games.delete('Mario Kart');
// games.clear() empties the set

console.log(games);
// Trying to add a duplicate or delete a non-existent entry fails w/o error

// add() returns the set if successful and delete() returns a Boolean
console.log(games.add('Poker')); // returns the set
console.log(games.delete('Basketball')); // returns false

// No length
console.log(games.size); // returns the num of items

// Find an item
console.log(games.has('Mario Kart')); // returns a Boolean

// Retrieve all items - values() is a SetIterator object
console.log(games.values());

// Can Iterate over sets
for (let item of games) {
  console.log(item);
}

// Because the .values() method returns a new iterator object (called SetIterator), you can store that iterator object in a variable and loop through each item in the Set using .next().

const iterator = games.values();
console.log(iterator.next()); // console.logged, of course, just to make result visible.
console.log(iterator.next());

const myFavoriteFlavors = new Set([]);

myFavoriteFlavors.add('chocolate chip');
myFavoriteFlavors.add('cookies and cream');
myFavoriteFlavors.add('strawberry');
myFavoriteFlavors.add('vanilla');
myFavoriteFlavors.delete('strawberry');

console.log(myFavoriteFlavors);



// ------------------- Weak Sets -------------
// Like regular sets but can only contain objects, not iterable, no .clear() method

const student1 = { name: 'James', age: 26, gender: 'male' };
const student2 = { name: 'Julia', age: 27, gender: 'female' };
const student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

const uniqueFlavors = new WeakSet([]);
let flavor1 = {flavor: 'chocolate'};
let flavor2 = {flavor: 'vanilla'};
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);
