# What I Learned — JavaScript Fundamentals

This is my write-up of the concepts I studied while following the
[Chai Aur JavaScript](https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)
playlist. For each area I explain the concept in my own words and connect it to
the demos I built in this repo (`counter`, `todo`, `quiz`).

---

## 1. Variables

I learned that JavaScript gives us three ways to declare variables: `var`,
`let`, and `const`. The big difference is scoping — `let` and `const` are
block-scoped (they only live inside `{}`), while `var` is function-scoped and
can "leak" out. I also learned about **hoisting**: declarations are moved to the
top before the code runs. `var` is hoisted and initialized to `undefined`, but
`let`/`const` stay in a "temporal dead zone" until their line executes. My rule
now is: use `const` by default, `let` when I need to reassign, and avoid `var`.

## 2. Data Types

I learned that JavaScript has **primitive** types (string, number, boolean,
null, undefined, symbol, bigint) and **objects**. A key lesson was **type
conversion** — JavaScript can quietly coerce types, which causes bugs. For
example `"5" + 1` becomes `"51"` (string), but `"5" - 1` becomes `4` (number).
I now use strict equality `===` instead of `==` so types are never silently
converted, and I convert user input to numbers with `Number()` before doing math.

## 3. Functions

I learned about function declarations vs
expressions, parameters vs arguments, and default values. The most important
idea was **closures**: a function "remembers" the variables from the scope where
it was created, even after that scope has finished. That is how my `counter` demo
keeps a private `count` that nothing outside can touch. I also learned about
arrow functions (which inherit `this` from their surroundings), how `this`
changes depending on how a function is called, and **IIFEs** (functions that run
once immediately to avoid polluting the global scope).

## 4. DOM Manipulation

I learned that the DOM is the tree of elements on the page, and JavaScript can
read and change it. Using methods like `document.getElementById`,
`document.createElement`, `append`/`appendChild`, and `remove`, I can build and
update the page dynamically. In my `todo` demo I create a new `<li>` for every
task and remove it when the user deletes the task — all without reloading the
page.

## 5. Events

I learned that the browser tells my code when something happens (a click, a key
press, form submit) through **events**. I use `addEventListener` to react to
them. In the `todo` demo, the "Add" button listens for a `click` and the input
listens for a `keydown` (Enter key) to add tasks. Events are what make a static
page interactive.

## 6. Arrays

I learned that arrays are ordered lists, and JavaScript gives powerful built-in
methods. Beyond `push`/`pop`, the real eye-opener was the **higher-order
methods**: `forEach`, `map`, `filter`, and `reduce`. These take a function and
apply it across the list — `map` transforms each item, `filter` keeps matching
items, and `reduce` boils the whole list down to one value. In the `todo` demo I
use `filter` to remove a task by its `id` and to count remaining tasks.

## 7. Objects

I learned that objects store related data as key/value pairs, which is how I
model a real thing (like a task: `{ id, text, done }`). I practiced nested
objects, object methods like `Object.keys`/`Object.values`, and **destructuring**
to pull properties out cleanly. I also learned how data moves over the internet
as **JSON** via `JSON.stringify` and `JSON.parse`.

## 8. Async Basics (Callbacks & Promises)

I learned that JavaScript is single-threaded, so long tasks (like fetching data)
must not block the page. **Callbacks** were the old way to run code after an
async task finishes, but they get messy ("callback hell"). The modern way is
**Promises** — an object that represents a future value with three states
(pending, fulfilled, rejected). I chain them with `.then()` and handle errors
with `.catch()`. My `quiz` demo uses a Promise that resolves after a simulated
delay (like a network request) and then renders the questions — this is exactly
the async flow I learned.

---

## How my demos prove what I learned

| Demo | Concepts it demonstrates |
|------|--------------------------|
| [`counter`](../counter/index.html) | Variables, scope, hoisting, closures, functions |
| [`todo`](../todo/index.html) | DOM manipulation, events, arrays, objects |
| [`quiz`](../quiz/index.html) | Async basics — Promises (`.then`/`.catch`, simulated fetch) |

## Reflection

Going through videos 1–35, the concepts that clicked hardest were **closures**
and **Promises** — both are about controlling *when* and *where* data is
available. Building the three demos turned abstract ideas into something I could
click and see. My next step is to keep practicing these core areas until they
become second nature, then move on to bigger projects.
