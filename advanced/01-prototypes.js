// 01 — Prototypes & the Prototype Chain
// run: node advanced/01-prototypes.js

// Every JS object has an internal [[Prototype]] link (accessible via
// __proto__ or Object.getPrototypeOf). This is how inheritance works.

// 1. The prototype chain in action
const animal = { eats: true };
const rabbit = { jumps: true };

rabbit.__proto__ = animal; // rabbit now inherits from animal
console.log("rabbit.eats:", rabbit.eats);  // true — found via prototype chain
console.log("rabbit.jumps:", rabbit.jumps); // true — own property

// 2. Using constructor functions + .prototype
function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function () {
  return `${this.name} says woof!`;
};

const fido = new Dog("Fido");
const rex = new Dog("Rex");
console.log("fido.bark():", fido.bark()); // Fido says woof!
console.log("rex.bark():", rex.bark());   // Rex says woof!
// fido.bark and rex.bark both point to the same Dog.prototype.bark —
// shared via the prototype chain.

// 3. Object.create — setting prototype directly
const base = { greet() { return "Hi!"; } };
const obj = Object.create(base);
obj.name = "Test";
console.log("obj.greet():", obj.greet()); // Hi! — inherited
console.log("obj.name:", obj.name);       // Test — own

// 4. hasOwnProperty vs prototype lookup
console.log("fido.hasOwnProperty('name'):", fido.hasOwnProperty("name"));  // true
console.log("fido.hasOwnProperty('bark'):", fido.hasOwnProperty("bark")); // false

// Key insight: property lookup walks up the chain until it finds the
// property or reaches null (Object.prototype → null).
console.log("Prototype chain end:", Object.getPrototypeOf(Object.prototype));
