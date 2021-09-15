/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name,
  this.age = age,
  this.stomach = []
}

    // need to push the food into array stomach, up to 10...from Office Hours
Person.prototype.eat = function (SomeFood) {
  if (this.stomach.length < 10){
    this.stomach.push(SomeFood)
  } else console.log("TOO HEAVY")
}
    // need to empty array once executed
Person.prototype.poop = function () {
  return this.stomach.length = 0;
}

// create String function
Person.prototype.toString = function () {
  return (`${this.name}, ${this.age}`)
}

// testing 

console.log('Testing')

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model,
  this.milesPerGallon = milesPerGallon,
  this.tank = 0,
  this.odometer = 0
  } 

  Car.prototype.fill = function (gallons) {
      this.tank = this.tank + gallons;
}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

//Writing a Baby constructor subclassing Person
function Baby (name, age, favoriteToy){
  // this.name = name;
  // this.age = age;
  this.favoriteToy = favoriteToy;
  // Below rips the name and age items from Person function so we don't need to repeat above, I commented out
  Person.call(this, name, age)
}

//giving Baby the same prototypes from Person
Baby.prototype = Object.create(Person.prototype);

//giving baby new Prototype, to play
Baby.prototype.play = function (favoriteToy) {
  return `Playing with ${this.favoriteToy}`;
}


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - not something we want to use really; this happens when this has no context, it defaults to window
  2. Implicit Binding - most common principle. Think dot method. This applies to bjects with methods (look to the left of the dot and that's "this")
  3. Explicit Binding - when we explicitly state what we want "this" to refer to....you can use .call(), .apply (), and .bind(); whatever is in the parantheses is what THIS is referring to
  4. New Binding is used with constructor functions; it says that when using the "new" kewyords that THIS points to the newly created object
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}