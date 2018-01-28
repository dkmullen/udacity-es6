/*jshint esversion: 6 */

// Fulfilled (resolved). Rejected, Pending, Settled (either Fulfilled or Rejected)
// A promise can only settle once
// A promise runs on the main thread and as such, can clog the page's work
// if they take a long time settling.

new Promise(function(resolve) {
  console.log('first');
  resolve(); // JS still finishes executing the function even after calling resolve
  console.log('second'); // Hence, this gets to run too because...
}).then(function() { // resolve calls .then WHEN the function is done
  console.log('third');
});

// resolve and reject can have values, which they can pass on to the functions
// called by then and catch
// BTW catch gets called if there is a JS error in the body of the promise
// also, if resove passes a promise, that promise will resolve before moving to next
