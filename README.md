# JavaScript Fundamentals

Three small, interactive JavaScript demos — each built to make one core concept
click. Open the demos in any browser (no build step, no dependencies).

## Demos

| Demo | Concept | File |
|------|---------|------|
| **Counter** | Scope, Closures, Hoisting | [`counter/index.html`](counter/index.html) |
| **To-Do** | DOM manipulation, Event handling | [`todo/index.html`](todo/index.html) |
| **Quiz** | Promises / async flow | [`quiz/index.html`](quiz/index.html) |

👉 Start from [`index.html`](index.html) for a hub that links to all three.

## What I Learned

My personal write-up of the JavaScript fundamentals I studied (videos 1–35):
variables, data types, functions, DOM manipulation, events, arrays, objects, and
async basics (callbacks, promises) — explained in my own words and connected to
the demos in this repo.

👉 Read it here: [`learning.md`](learning.md)

## What I Learned (Advanced)

My personal write-up of the advanced JavaScript concepts I studied (videos
36–51): prototypes & prototype chain, ES6+ features (destructuring, spread/rest,
optional chaining), iterators, generators, ES modules, and design patterns —
explained in my own words with annotated code exercises.

👉 Read it here: [`advanced-learning.md`](advanced-learning.md)

---

## Concepts covered

### 1. Scope
Scope decides **where** a variable is visible.
- **Global scope** — variables declared outside any function, reachable everywhere.
- **Function (local) scope** — variables declared inside a function, reachable only there.
- **Block scope** — `let` and `const` are scoped to the `{}` block; `var` is not.

In the **counter** demo, `count` lives inside `createCounter` and is hidden from
the outside world — only the returned methods can touch it.

### 2. Closures
A **closure** is a function that "remembers" the variables from the scope in
which it was created, even after that scope has finished executing.

```js
function createCounter(initial) {
  let count = initial;          // private, captured by the closures below
  return {
    increment() { count += 1; },
    get value() { return count; },
  };
}
```

Each call to `createCounter` produces a *new* closure with its own private
`count`. That is why you can have many independent counters.

### 3. Hoisting
Before code runs, JavaScript moves **declarations** to the top of their scope.
- `var` declarations are hoisted **and initialized to `undefined`**.
- `let` / `const` are hoisted but kept in the "temporal dead zone" until declared.
- **Function declarations** are fully hoisted, so they can be called before
  they appear in the source. (This is why `createCounter(...)` is called at the
  top of the counter script even though the function is written below.)

### 4. DOM manipulation & Events
The **to-do** demo builds elements with `document.createElement`, inserts them
with `append` / `appendChild`, updates text, and removes nodes with `remove()`.
Events are wired with `addEventListener` — `click` on buttons and `keydown`
(Enter key) on the input.

### 5. Promises
A **Promise** represents a value that isn't available yet (the result of an
asynchronous operation). It can be **pending**, **fulfilled**, or **rejected**.

The **quiz** demo uses `fetchQuestions()` which returns a `Promise` that
resolves after a simulated delay:

```js
fetchQuestions()
  .then((data) => render(data))   // runs when the promise fulfills
  .catch((err) => showError(err)); // runs if it rejects
```

Promises let you write async code that reads top-to-bottom instead of nesting
callbacks, and they chain cleanly with `.then()` / `.catch()` (or `async`/`await`).

---

## How to run

Just open any `index.html` in a browser. No server or install required.

```bash
# optional: serve locally
python -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
JavaScriptfundamentals/
├── index.html              # hub page
├── counter/index.html      # scope, closures, hoisting
├── todo/index.html         # DOM + events
├── quiz/index.html         # promises
├── advanced/               # Advanced JS annotated exercises
│   ├── 01-prototypes.js
│   ├── 02-es6-plus.js
│   ├── 03-generators-iterators.js
│   ├── 04-es-modules/
│   │   ├── math-es.mjs
│   │   ├── app-es.mjs
│   │   ├── math-cjs.cjs
│   │   └── app-cjs.cjs
│   └── 05-design-patterns.js
├── learning.md             # What I Learned — fundamentals
├── advanced-learning.md    # What I Learned — advanced
└── README.md
```
