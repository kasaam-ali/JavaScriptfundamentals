// CommonJS — import (via require)
// run: node app-cjs.cjs

const math = require("./math-cjs.cjs");

console.log("CommonJS — require test");
console.log("add(3, 4):", math.add(3, 4));
console.log("subtract(10, 3):", math.subtract(10, 3));
console.log("PI:", math.PI);
console.log("multiply(2, 5):", math.multiply(2, 5));

// Key traits of CommonJS:
// - Dynamic require() — resolved at runtime (can be inside if/loops)
// - module.exports = whatever you want (object, function, etc.)
// - Synchronous — files are loaded and executed on the spot
// - Top-level `this` is module.exports (not undefined)
// - Not usable in browsers without a bundler (webpack, rollup)
// - Default in Node.js .js files (before "type": "module" support)
