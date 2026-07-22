// 03 — Iterators & Generators
// run: node advanced/03-generators-iterators.js

// ---------- Iterators ----------
// An object is iterable if it has a [Symbol.iterator] method that returns
// an iterator (an object with a next() method returning { value, done }).

function createRange(start, end) {
  let current = start;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

const range = createRange(1, 4);
// for...of uses Symbol.iterator automatically
for (const n of range) {
  console.log("iterated:", n);
}

// Manual iteration
const it = createRange(10, 12).next(); // get iterator, then call next
// Actually the above isn't right — let me show manual properly:
const manualIt = createRange(10, 12);
const it1 = manualIt.next();
const it2 = manualIt.next();
const it3 = manualIt.next();
const it4 = manualIt.next();
console.log("manual:", it1, it2, it3, it4);
// → { value: 10, done: false } ... { value: undefined, done: true }

// ---------- Generators ----------
// A generator function (function*) returns a Generator object which is
// both iterable and an iterator. Execution pauses at every yield.

function* myCounter() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myCounter();
console.log("gen.next():", gen.next()); // { value: 1, done: false }
console.log("gen.next():", gen.next()); // { value: 2, done: false }
console.log("gen.next():", gen.next()); // { value: 3, done: false }
console.log("gen.next():", gen.next()); // { value: undefined, done: true }

// for...of works directly
for (const n of myCounter()) {
  console.log("generator for...of:", n);
}

// Generator with dynamic logic
function* fibonacci(limit) {
  let a = 0, b = 1;
  while (a <= limit) {
    yield a;
    [a, b] = [b, a + b]; // destructuring swap — ES6!
  }
}

for (const n of fibonacci(50)) {
  console.log("fib:", n);
}
// → 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// yield* delegates to another iterable/generator
function* teamGenerator() {
  yield "Alice";
  yield "Bob";
  yield* myCounter(); // delegates to myCounter
  yield "Done";
}
console.log("yield* delegation:", [...teamGenerator()]);
// → [ 'Alice', 'Bob', 1, 2, 3, 'Done' ]

// Practical use: generators produce data lazily — they don't compute
// the next value until next() is called. Great for infinite sequences
// or large data sets.
