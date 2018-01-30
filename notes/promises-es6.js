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

/*
Working w/ document.readyState
Has three states:
  Loading, interractive (HTML is here, still working on CSS, images) and complete
Fires 'readystatechange' on changes
It can be useful to use a promise to run code when state becomes interractive
*/

// The old way:
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);

// the new
doSomething().then(successCallback, failureCallback);
// Modern functions return a promise you can attach your callbacks to.

function getSomething() {
  // whatevs
}

getSomething()
  .then(() => {

  })
  .catch(() => {

  });

  // Chaining
  doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);

// or, in ES6
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);

// You can chain .then() after .catch() too.
