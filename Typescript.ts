// TypeScript includes all the features of JavaScript, plus extra features.

// TypeScript allows you to define the type of variables, function parameters, and return values at compile time, so you can catch errors earlier, before running the code.

//using js
// function add(a, b) {
//   return a + b;
// }

//using ts
function add(a: number, b: number): number {
  return a + b;
}


// -------------------Type Assignment----------------
// When creating a variable, there are two main ways TypeScript assigns a type:

// Explicit type assignment are easier to read and more intentional.
// Exp :  let firstName: string = "Dylan";


// Implicit - TypeScript will "guess" the type, based on the assigned value:
// Exp : let firstName = "Dylan";


// ---------------------------Type: any---------------
// any is a type that disables type checking and effectively allows all types to be used.


// Type Annotations & Inference
// 1. Type Annotations
let age: number = 25;
let myName: string = "Aftab";
let isDev: boolean = true;
// Explicitly tell TS what the type is.


// 2. Type Inference
// let city = "Lahore"; // inferred: string
// TS guesses the type from the value.



// 3. Union Types
let value: number | string = 10;
value = "ten"; // ok
// Allow multiple possible types.



// 4. any vs unknown
// any: disables all type checking. Dangerous.
// unknown: must be narrowed before use. Safer.
let x: unknown = "hi";
if (typeof x === "string") x.toUpperCase();




// 5. Function Typing
function addUp(a: number, b: number): number {
  return a + b;
}
// Specify parameter types and return type.


// 6. Arrays & Tuples
let nums: number[] = [1, 2, 3];
let pair: [string, number] = ["age", 30];
const fixed: readonly [string, number] = ["id", 1];
// Use readonly to prevent mutation:



// 7. Type Aliases
type ID = string | number;
const userId: ID = 123;



// 8. Type Assertions
const val: unknown = "hello";
const str = val as string;
// Use sparingly — it overrides compiler’s safety.



// 9. Key Point
// TypeScript types exist only at compile time. They vanish when JS runs.

// =============================
// 📘 Topic 2: Interfaces & Type Aliases
// =============================

// 1. Interface defines the *shape* of an object.
interface Car {
  make: string;
  model: string;
  year?: number; // optional property
}

const myCar: Car = { make: "Honda", model: "VXL", year: 2025 };

// 2. Extending Interfaces
interface User {
  name: string;
  id: number;
}

interface Admin extends User {
  role: string;
}

const user: User = { name: "Aftab", id: 1 };
const admin: Admin = { name: "Ahmad", id: 2, role: "superUser" };

// 3. Type Aliases
// - More flexible than interfaces.
// - Can define primitives, unions, intersections, tuples, etc.
type ResponseStatus = "ok" | "fail";
let r: ResponseStatus = "ok"; // Only "ok" or "fail" allowed

// 4. Interface vs Type
// - Interface: only for object structures.
// - Type: for primitives, unions, intersections, etc.

type Status = "success" | "error"; // OK ✅
/*
interface Status { } ❌ Not possible
*/

// 5. Interface Merging vs Type Intersection
// Interface merging (automatic)
interface Dog { name: string; }
interface Dog { breed: string; }
const dog: Dog = { name: "Rex", breed: "Husky" };

// Type intersection (manual)
type A = { name: string };
type B = { age: number };
type C = A & B;
const person: C = { name: "Aftab", age: 25 };

// 6. Quick Recap
/*
- interface → for object shapes, can extend and merge
- type → for everything (primitives, unions, tuples, intersections)
- use 'interface' when designing OOP-style data models
- use 'type' when you need flexibility
*/
