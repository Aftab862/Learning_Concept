/**
 * 📘 TypeScript Notes: Comprehensive Reference
 *
 * TypeScript (TS) is a superset of JavaScript (JS) that adds static typing.
 * It catches errors at compile time, improving code quality and maintainability.
 * Types vanish when compiled to pure JS.
 */

// ===============================================
// 📘 Topic 1: Basic Types, Functions, and Structures
// ===============================================

// --- 1. Type Assignment ---
// Explicit: Clear, intentional type declaration.
let firstName: string = "Dylan";
// Implicit (Inference): TS guesses the type from the value.
let lastName = "Aftab"; // Inferred as string

// --- 2. Basic Type Annotations ---
let age: number = 25;       // For all numbers (int/float)
let myName: string = "Aftab";   // For text
let isDev: boolean = true;      // For true/false

// --- 3. Special Types ---
// 'any': Disables type checking. Use sparingly.
let data: any = "can be anything";
data = 10; // No error

// 'unknown': Safer alternative to 'any'. Requires narrowing before use.
let x: unknown = "hi";
// x.toUpperCase(); // Error: must be narrowed
if (typeof x === "string") {
  x.toUpperCase(); // OK: x is narrowed to string
}

// 'Union Types': Allows multiple possible types.
let value: number | string = 10;
value = "ten"; // OK

// --- 4. Function Typing ---
// Specify parameter types and a return type.
function addUp(a: number, b: number): number {
  return a + b;
}

// --- 5. Arrays & Tuples ---
// Array: Collection of one type.
let nums: number[] = [1, 2, 3];
// Alternative array syntax (less common): let nums: Array<number> = [1, 2, 3];

// Tuple: Fixed-length, ordered array where each element has a fixed type.
let pair: [string, number] = ["age", 30];

// Readonly Tuple: Prevents mutation.
const fixed: readonly [string, number] = ["id", 1];

// --- 6. Type Aliases ---
// Creates a custom name for a type (primitive, union, or object shape).
type ID = string | number;
const userId: ID = 123;

// --- 7. Type Assertions ---
// Tells the compiler "trust me, I know this type better." Overrides safety.
const val: unknown = "hello";
const str = val as string; // Asserting 'val' is a string

// ===============================================
// 📘 Topic 2: Interfaces & Type Aliases for Object Shapes
// ===============================================

// --- 1. Interface: Defines the shape of an object (or class) ---
interface Carr {
  make: string;
  model: string;
  year?: number; // Optional property
}

const myCar: Carr = { make: "Honda", model: "VXL", year: 2025 };

// --- 2. Extending Interfaces (Inheritance) ---
interface User {
  name: string;
  id: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = { name: "Ahmad", id: 2, role: "superUser" };

// --- 3. Interface Merging (Automatic) ---
// Multiple declarations with the same name are merged.
interface Dogg { name: string; }
interface Dogg { breed: string; } // Merged with the above
const dog: Dogg = { name: "Rex", breed: "Husky" };


// --- 4. Type Aliases (More Flexible) ---
// Use for primitives, unions, intersections, and object shapes.
type ResponseStatus = "ok" | "fail" | 404;
let r: ResponseStatus = "ok"; // Constrained to literal values/types

// --- 5. Type Intersection (Manual Merging) ---
// Combines properties of multiple types.
type A = { name: string };
type B = { age: number };
type C = A & B; // C must have BOTH 'name' and 'age'
const person: C = { name: "Aftab", age: 25 };

/**
 * Quick Recap: Interface vs. Type
 * - interface: For object shapes, supports extension and merging.
 * - type: For everything (primitives, unions, intersections, tuples).
 */

// ===============================================
// 📘 Topic 3: Type Narrowing & Type Guards
// ===============================================

/**
 * Narrowing: Reducing a union type (e.g., string | number) to a more specific type
 * within a code block using runtime checks.
 */

// --- 1. typeof Narrowing (Primitives) ---
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // id is narrowed to string
  } else {
    console.log(id.toFixed(2)); // id is narrowed to number
  }
}

// --- 2. instanceof Narrowing (Classes) ---
class DogClass { bark() { console.log("woof"); } }
class CatClass { meow() { console.log("meow"); } }

function makeSound(animal: DogClass | CatClass) {
  if (animal instanceof DogClass) {
    animal.bark(); // animal is narrowed to DogClass
  } else {
    animal.meow(); // animal is narrowed to CatClass
  }
}

// --- 3. 'in' Operator Narrowing (Properties on Objects) ---
// Useful for differentiating objects by their required properties.
interface Fish { swim(): void; }
interface Bird { fly(): void; }

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // animal is narrowed to Fish
  } else {
    animal.fly(); // animal is narrowed to Bird
  }
}

// --- 4. Custom Type Guard (Type Predicate) ---
// A function returning 'x is Type' tells TS how to narrow manually.
interface AdminT { role: string; }
interface UserT { name: string; }

function isAdmin(person: AdminT | UserT): person is AdminT {
  // Check if the property 'role' exists on the object
  return "role" in person;
}

function greet(person: AdminT | UserT) {
  if (isAdmin(person)) {
    console.log("Hello Admin:", person.role); // 'person' is AdminT
  } else {
    console.log("Hello User:", person.name); // 'person' is UserT
  }
}

// --- 5. Discriminated Unions (The most reliable form of narrowing) ---
// Use a literal type property ('kind') to differentiate members of a union.
type Success = { status: "success", data: string };
type Errorr = { status: "error", message: string };
type ApiResponse = Success | Errorr;

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log(res.data); // res is narrowed to Success
  } else {
    console.log(res.message); // res is narrowed to Error
  }
}