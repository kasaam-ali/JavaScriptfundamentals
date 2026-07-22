// ES Module — import
// run: node app-es.mjs

// Named imports (curly braces)
import multiply, { add, subtract, PI } from "./math-es.mjs";

console.log("ES Modules — import test");
console.log("add(3, 4):", add(3, 4));
console.log("subtract(10, 3):", subtract(10, 3));
console.log("PI:", PI);
console.log("multiply(2, 5):", multiply(2, 5));

// Key traits of ES modules:
// - Static imports/exports — resolved at parse time (before code runs)
// - Named exports (any number) + 1 default export
// - Top-level `this` is undefined (not global)
// - Strict mode by default
// - Works in browsers with <script type="module"> and Node with .mjs or
//   "type": "module" in package.json
