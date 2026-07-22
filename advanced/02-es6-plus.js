// 02 — ES6+ Features: Destructuring, Spread/Rest, Optional Chaining
// run: node advanced/02-es6-plus.js

// ---------- Destructuring ----------
// Unpack values from arrays or objects into variables.

// Array destructuring
const rgb = [255, 128, 64];
const [red, green, blue] = rgb;
console.log("red:", red, "green:", green, "blue:", blue);

// Skip elements with commas
const [, , third] = rgb;
console.log("third only:", third);

// Object destructuring
const user = { id: 1, name: "Alice", email: "alice@example.com" };
const { name, email } = user;
console.log("destructured name:", name, "email:", email);

// Rename during destructure
const { name: userName, email: userEmail } = user;
console.log("renamed:", userName, userEmail);

// Default values
const { role = "guest" } = user;
console.log("role (default):", role);

// Nested destructuring
const data = { person: { first: "John", last: "Doe" } };
const { person: { first, last } } = data;
console.log("nested:", first, last);

// ---------- Spread & Rest ----------
// Spread (...) expands an iterable into individual elements.
// Rest collects remaining elements into an array/object.

// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log("spread merged:", merged);

// Spread copies (shallow)
const copy = [...arr1];
console.log("spread copy:", copy);

// Spread with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 }; // later keys override earlier
console.log("object spread:", combined); // { a: 1, b: 3, c: 4 }

// Rest in destructuring
const [firstNum, ...rest] = [10, 20, 30, 40];
console.log("firstNum:", firstNum, "rest:", rest);

// Rest in function params — variable-length arguments
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("sum(1,2,3):", sum(1, 2, 3));
console.log("sum(4,5,6,7,8):", sum(4, 5, 6, 7, 8));

// Rest in object destructuring
const { id, ...restOfUser } = user;
console.log("restOfUser:", restOfUser);

// ---------- Optional Chaining (?.) ----------
// Safely access nested properties without throwing if null/undefined.
const apiResponse = {
  status: "ok",
  data: null,
  // profile: { name: "Bob" }   // sometimes present, sometimes not
};

// Without optional chaining:
// const profileName = apiResponse.profile.name;  // TypeError!

// With optional chaining:
const profileName = apiResponse.profile?.name;
console.log("optional chaining (null):", profileName); // undefined, no crash

const api2 = { status: "ok", data: { items: [1, 2, 3] } };
const itemCount = api2.data?.items?.length;
console.log("optional chaining (exists):", itemCount); // 3

// Optional chaining also works with function calls and dynamic access.
const maybeFn = null;
const result = maybeFn?.();
console.log("optional fn call:", result); // undefined
