// 🟢 What is Execution Context?
// Think of an Execution Context (EC) as a container where JavaScript code runs. Every time JavaScript executes a script, function, or block, it creates an execution context.

// There are 3 types of Execution Contexts:
// 1️⃣ Global Execution Context (GEC) – Created when your JavaScript file runs.
// 2️⃣ Function Execution Context (FEC) – Created when a function is called.
// 3️⃣ Eval Execution Context – Created inside the eval() function (rarely used).

// 🟢 Phases of Execution Context Creation
// Whenever JavaScript runs a script or calls a function, it does two things:

// 1️⃣ Creation Phase (Memory Allocation & Hoisting)
// JavaScript allocates memory for variables and functions.
// Variables declared with var get undefined.
// let and const stay in the **Temporal Dead Zone (TDZ)`.
// Function declarations are fully hoisted.
// 2️⃣ Execution Phase (Code Execution)
// JavaScript assigns values to variables.
// Executes function calls.
// Modifies variables and objects.


console.log(a); // ❓ What happens?

var a = 10;

function greet() {
    console.log("Hello!");
}

greet();



// Step 1: Creation Phase
// a is hoisted with value undefined.
// greet() function is hoisted entirely.
// Step 2: Execution Phase
// console.log(a); → undefined (because a is hoisted but not assigned).
// a = 10; (assigns value).
// greet(); runs and logs "Hello!".



// Call Stack(How JavaScript Manages Execution Contexts)
// Every time a function is called, JavaScript creates a new Execution Context and pushes it onto the Call Stack.


function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
}

first();
// Call Stack Flow:
// 1️⃣ first() is called → Execution Context for first() is created
// 2️⃣ Inside first(), second() is called → Execution Context for second() is created
// 3️⃣ second() finishes → Its Execution Context is removed
// 4️⃣ first() finishes → Its Execution Context is removed

// 💡 The Global Execution Context (GEC) stays until the program finishes.

// 🔴 Recursion & Call Stack Overflow
// If a function calls itself too many times without a stopping condition, the call stack overflows, causing an error.


function infiniteRecursion() {
    infiniteRecursion(); // ❌ Stack Overflow Error
}

infiniteRecursion();
// 🟢 Why is Execution Context Important?
// ✅ Helps understand hoisting & variable scoping.
// ✅ Explains how functions are executed.
// ✅ Prevents stack overflow in recursive functions.





// --------------------------------------notes --------------------------
// on Each function execution it creates another execution phase contains creation phase (Memory allocation ) and execution phase plus
// it also creates a lot of built in methods / function including  this keywords
// so if nothing inside call stack it creates globle Object in browser called this===windows
// so in global this points to global and used to access windows/global methods
// if some code defines in another function thats not global so again for this execution pahase created with a lot of method + this
// this times this points to specific scope when it execute and finish execution context finishes with memmory plus this keyword.


//----------------------------------------this----------------------------------------------
// | Context                        | `this` Value                    |
// | ------------------------------ | ------------------------------- |
// | Global (Browser)               | `window`                        |
// | Global (Node.js)               | `{}`                            |
// | Inside a function (strict)     | `undefined`                     |
// | Inside a function (non-strict) | Global object                   |
// | Inside an object method        | The object                      |
// | Arrow function                 | Inherits from surrounding scope |


