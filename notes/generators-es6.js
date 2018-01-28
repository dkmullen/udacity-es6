/*jshint esversion: 6 */

// function* getEmployee() {
//     console.log('the function has started');
//
//     const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
//
//     for (const name of names) {
//         console.log(name);
//         yield;
//     }
//
//     console.log('the function has ended');
// }
// const genetatorIterator = getEmployee();
// genetatorIterator.next();

function* createSundae() {
    const toppings = [];

    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);

    return toppings;
}

var it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
it.next();
