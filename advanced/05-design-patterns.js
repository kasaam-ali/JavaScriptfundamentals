// 05 — Common JavaScript Design Patterns
// run: node advanced/05-design-patterns.js

// ---------- 1. Module Pattern ----------
// Uses an IIFE to create private scope + return a public API.
const CounterModule = (function () {
  let count = 0; // private — cannot be accessed from outside

  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
    getValue() {
      return count;
    },
  };
})();

console.log("Module Pattern:");
console.log("CounterModule.increment():", CounterModule.increment()); // 1
console.log("CounterModule.increment():", CounterModule.increment()); // 2
console.log("CounterModule.getValue():", CounterModule.getValue());   // 2
console.log("CounterModule.count:", CounterModule.count);             // undefined — private
console.log("CounterModule.reset():", CounterModule.reset());         // 0

// ---------- 2. Singleton Pattern ----------
// Ensures only one instance exists.
const Singleton = (function () {
  let instance = null;

  function createInstance() {
    return { id: Math.random(), createdAt: new Date().toISOString() };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log("\nSingleton Pattern:");
console.log("a.id === b.id:", a.id === b.id); // true — same instance
console.log("a.createdAt:", a.createdAt);

// ---------- 3. Observer Pattern ----------
// One subject notifies multiple observers when its state changes.
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((f) => f !== fn);
  }

  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

console.log("\nObserver Pattern:");
const news = new Subject();

const alice = (msg) => console.log("Alice received:", msg);
const bob = (msg) => console.log("Bob received:", msg);

news.subscribe(alice);
news.subscribe(bob);
news.notify("Breaking news!"); // both receive

news.unsubscribe(alice);
news.notify("Second story"); // only Bob receives

// ---------- 4. Factory Pattern ----------
function createUser(type) {
  if (type === "admin") {
    return { role: "admin", permissions: ["read", "write", "delete"] };
  }
  if (type === "editor") {
    return { role: "editor", permissions: ["read", "write"] };
  }
  return { role: "viewer", permissions: ["read"] };
}

console.log("\nFactory Pattern:");
const admin = createUser("admin");
const editor = createUser("editor");
console.log("admin:", admin);
console.log("editor:", editor);
