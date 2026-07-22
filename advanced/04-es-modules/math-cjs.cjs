// CommonJS — export (Node's original module system)
// run: node app-cjs.cjs

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

const PI = 3.14159;

// module.exports is the object that require() returns
module.exports = { add, subtract, multiply, PI };
