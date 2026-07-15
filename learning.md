# Learning — Chai Aur JavaScript Roadmap

A short, code-free study roadmap based on the
[Chai Aur JavaScript](https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)
playlist by Hitesh Choudhary. Each topic below is a checkpoint — watch the
video, then make sure you can explain the idea in your own words.

> These notes are concept summaries only (no code). The interactive demos in
> this repo (`counter`, `todo`, `quiz`) put several of these topics into practice.

---

## The 30 Topics

1. **JavaScript for beginners (intro)** — What JS is, where it runs (browser +
   server via Node), and why it is the language of the web.

2. **Setting up the environment** — Installing Node.js, a code editor (VS Code),
   and running `.js` files from the terminal.

3. **Working with GitHub** — Initializing a repo, committing, and pushing code so
   your work is saved and shareable (exactly what this repo does).

4. **`let`, `const`, `var`** — The three ways to declare variables. `let`/`const`
   are block-scoped; `var` is function-scoped and hoisted differently. Prefer
   `const` by default, `let` when reassignment is needed.

5. **Datatypes & ECMA standards** — Primitive types (string, number, boolean,
   null, undefined, symbol, bigint) vs objects, and how the ECMAScript standard
   defines the language.

6. **Type conversion confusion** — Implicit vs explicit coercion (e.g. `String()`,
   `Number()`), and why `"5" + 1` is not the same as `"5" - 1`.

7. **Why string to number** — Converting user input (always a string) into a
   number before doing math, using `Number()`, `parseInt()`, or `parseFloat()`.

8. **Comparison of datatypes** — Loose (`==`) vs strict (`===`) equality, and how
   type coercion can produce surprising results with `==`.

9. **Datatypes summary** — A recap of primitives, objects, and how to check types
   with `typeof` and `instanceof`.

10. **Stack vs heap memory** — Primitives live on the stack (by value); objects/
    arrays live on the heap and are referenced by address (copying shares the
    reference).

11. **Strings in JavaScript** — String methods (`slice`, `split`, `toUpperCase`,
    template literals) and immutability.

12. **Numbers & Math** — Number type, `Math` helpers (`random`, `floor`, `max`),
    rounding, and floating-point quirks.

13. **Date & Time** — The `Date` object, creating/formatting dates, and common
    methods like `getFullYear()` and `toLocaleString()`.

14. **Arrays (part 1)** — Creating arrays, indexing, `push`/`pop`/`shift`/`unshift`,
    and iterating with loops.

15. **Arrays (part 2)** — More methods: `slice`, `splice`, `concat`, `includes`,
    `indexOf`, and nested arrays.

16. **Objects in depth** — Object literals, key/value pairs, dot vs bracket
    notation, and how objects store related data.

17. **Objects (part 2)** — Mutating objects, nested objects, and `Object.keys`/
    `Object.values`/iterating.

18. **Object destructuring & JSON API** — Pulling properties out with
    destructuring, and converting to/from JSON with `JSON.stringify`/`parse` (how
    data travels over APIs).

19. **Functions & parameters** — Declaring functions, parameters vs arguments,
    default values, and `return`.

20. **Functions with objects** — Passing objects into functions and returning
    objects, plus the spread/rest patterns.

21. **Global & local scope** — Where variables are visible; inner scopes can read
    outer ones but not the reverse.

22. **Scope level & mini hoisting** — How function/block scope works and how
    declarations are hoisted to the top before execution.

23. **`this` & arrow functions** — How `this` is determined by call site, and why
    arrow functions inherit `this` from their surrounding scope.

24. **Immediately Invoked Function Expressions (IIFE)** — Functions that run once
    immediately, used to avoid polluting the global scope.

25. **How JavaScript works behind the scenes** — The call stack, the event loop,
    the callback queue, and how async code is scheduled.

26. **Control flow** — `if`/`else`, `switch`, truthy/falsy values, and guarding
    logic.

27. **`for` loop, break & continue** — Classic loops and controlling iteration.

28. **`while` / `do...while` loops** — Loop-until-condition patterns.

29. **Higher-order array loops** — `forEach` and looping methods that take a
    callback function.

30. **`filter`, `map`, `reduce`** — The three transform methods: keep matching
    items, project each item, and boil a list down to a single value.

---

## Where the demos in this repo fit

| Demo | Topic(s) it demonstrates |
|------|--------------------------|
| [`counter`](../counter/index.html) | #21 Global/local scope, #22 hoisting, and closures (private state via returned functions) |
| [`todo`](../todo/index.html) | DOM manipulation + event handling (add/toggle/delete, `click` & `keydown`) |
| [`quiz`](../quiz/index.html) | Promises / async flow (`.then`/`.catch`, simulated fetch delay) |

## Suggested study loop
1. Watch the playlist topic.
2. Read its note above and re-explain it aloud.
3. If a demo covers it, open the demo and connect the concept to the behavior.
4. Move to the next topic.
