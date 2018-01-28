/*jshint esversion: 6 */

/*
--------------------Classes -------------
Classes in ES6 are an 'illusion'. It's prototype inheritance under the hood
*/

// The ES5 way
// The constructor function that will create new plane objects - cap letter by convention
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// Prototype object - contains methods "inherited" by all instances
Plane.prototype.startEngines = function () {
  console.log(`Starting ${this.numEngines} engines`);
  this.enginesActive = true;
};

// Keyword 'new' calls the constructor function, above
const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();

// The ES6 way

// Note that the constructor and the methods are placed inside the class
class Plane2 { // even with new syntax, this is just a function
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() { // methods are still just added to the prototype, as above
    console.log(`Starting ${this.numEngines} engines, all yall`);
    this.enginesActive = true;
  }
}

const billPlane = new Plane2(6);
billPlane.startEngines();

/* Static methods
To add a static method, the keyword static is placed in front of the method name. Look at the badWeather() method in the code below.
*/

class Plane3 {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  static badWeather(planes) {
    for (let plane of planes) {
      console.log('grounded');
      plane.enginesActive = false;
    }
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

const stevePlane = new Plane3(6);
stevePlane.startEngines();
/*
See how badWeather() has the word static in front of it while startEngines() doesn't? That makes badWeather() a method that's accessed directly on the Plane class, so you can call it like this:
*/
Plane3.badWeather([stevePlane]);
