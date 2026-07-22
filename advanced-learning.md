# What I Learned — Advanced JavaScript

**Task:** Advanced JavaScript (videos 36–51)
**Roadmap:** Prototypes & prototype chain, ES6+ features (destructuring, spread/rest,
optional chaining), iterators, generators, ES modules, and common design patterns.
**Budget:** 7–15 days depending on pace.
**Due:** 7/19/2026

This is my write-up of the advanced JS concepts I studied. For each area I
explain the concept in my own words and connect it to the annotated exercises
I created in the [`advanced/`](./advanced) folder.

---

## 1. Prototypes & the Prototype Chain

I learned that every JavaScript object has a hidden `[[Prototype]]` link (I can
access it with `__proto__` or `Object.getPrototypeOf`). When I try to read a
property that does not exist on the object itself, JavaScript walks up this
chain until it either finds the property or reaches `null`. This is the
**prototype chain**, and it is how JS implements inheritance — not through
classes like other languages, but through objects linking to other objects.

In my exercise [`01-prototypes.js`](./advanced/01-prototypes.js) I show:
- Setting `__proto__` to inherit from another object.
- Using constructor functions with `.prototype` so all instances share methods.
- Using `Object.create()` to set a prototype directly.
- Checking own vs inherited properties with `hasOwnProperty`.

## 2. ES6+ Features (Destructuring, Spread/Rest, Optional Chaining)

The biggest win for me was how much cleaner ES6+ syntax makes everyday code:

- **Destructuring** — I can unpack arrays (`const [a, b] = arr`) or objects
  (`const { name, age } = obj`) directly instead of accessing each index or key.
  I can rename properties, set defaults, and nest destructuring.
- **Spread (`...`)** — I expand an array or object into individual elements. This
  is great for merging arrays, shallow-copying objects, and overriding properties.
- **Rest (`...`)** — The same syntax but in a different context; it collects
  remaining elements into an array (function params or destructuring).
- **Optional chaining (`?.`)** — I can safely access deeply nested properties
  without crashing: `data?.profile?.name` returns `undefined` if any part is
  `null` or `undefined`.

My exercise [`02-es6-plus.js`](./advanced/02-es6-plus.js) has runnable examples
of all of these.

## 3. Generators & Iterators

**Iterators** are objects with a `next()` method that returns `{ value, done }`.
An object becomes **iterable** (usable with `for...of`) when it has a
`[Symbol.iterator]` method that returns an iterator. I built a custom range
iterable to understand this.

**Generators** (`function*`) are functions that can pause execution mid-way
with `yield` and resume later. They return a Generator object which is both
iterable and an iterator. Instead of computing all values upfront, generators
produce values lazily — one at a time when `next()` is called. I also learned
`yield*` which delegates to another generator or iterable.

My exercise [`03-generators-iterators.js`](./advanced/03-generators-iterators.js)
has a range iterator, a generator counter, a Fibonacci generator, and a
`yield*` delegation example.

## 4. ES Modules vs CommonJS

I learned that JavaScript has two module systems:

| Feature | ES Modules (`.mjs` / `type: "module"`) | CommonJS (`.js` default in Node) |
|---------|----------------------------------------|----------------------------------|
| Syntax | `import` / `export` | `require()` / `module.exports` |
| Loading | Static (resolved at parse time) | Dynamic (resolved at runtime) |
| Top-level `this` | `undefined` | `module.exports` |
| Strict mode | Always | Opt-in |
| Browser use | Yes with `<script type="module">` | Needs bundler |
| Async? | Yes (imports are async) | Synchronous |

My exercise folder [`04-es-modules/`](./advanced/04-es-modules/) has two
side-by-side versions of the same math library — one using ES modules
(`math-es.mjs` / `app-es.mjs`) and one using CommonJS (`math-cjs.cjs` /
`app-cjs.cjs`). Running both shows they produce the same result but work
differently under the hood.

## 5. Common Design Patterns

I studied the most common JS patterns used in real projects:

- **Module Pattern** — An IIFE that creates a private scope and returns a public
  API. My `counter` demo actually uses this same idea to hide the `count`
  variable. (Exercise: [`05-design-patterns.js`](./advanced/05-design-patterns.js))
- **Singleton** — Ensures only one instance of an object exists. The `getInstance`
  method returns the existing instance if already created.
- **Observer** — A subject maintains a list of observers and notifies them when
  something changes. This pattern is used everywhere in event-driven code
  (and is the foundation of tools like RxJS).
- **Factory** — A function that creates and returns objects based on a type
  parameter, without needing `new` or exposing the construction logic.

---

## Where the advanced exercises fit

| Exercise | Concepts it demonstrates |
|----------|--------------------------|
| [`01-prototypes.js`](./advanced/01-prototypes.js) | Prototype chain, `__proto__`, `.prototype`, `Object.create`, `hasOwnProperty` |
| [`02-es6-plus.js`](./advanced/02-es6-plus.js) | Destructuring, spread/rest, optional chaining, defaults |
| [`03-generators-iterators.js`](./advanced/03-generators-iterators.js) | `Symbol.iterator`, custom iterables, `function*`, `yield`, `yield*` |
| [`04-es-modules/`](./advanced/04-es-modules/) | ES modules vs CommonJS — syntax, loading, scope comparison |
| [`05-design-patterns.js`](./advanced/05-design-patterns.js) | Module, singleton, observer, factory patterns |

## Reflection

The prototype chain was the hardest concept for me — coming from other
languages, I kept thinking in terms of classes. Once I stopped looking for
"class inheritance" and started thinking about objects linking to objects,
it clicked. Generators and iterators made me appreciate lazy evaluation.
ES6+ features like destructuring and optional chaining have already made my
day-to-day code cleaner and safer. The design patterns gave me vocabulary
for solutions I was already reaching for intuitively.
