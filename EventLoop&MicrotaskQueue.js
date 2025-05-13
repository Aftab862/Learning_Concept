// 🔄 Event Loop & Microtask Queue in JavaScript
// JavaScript is single-threaded, meaning it can execute one task at a time. But then…

// ❓ How does it handle asynchronous operations like setTimeout, fetch, and promises?
// 💡 Answer: The Event Loop!

// 1️⃣ JavaScript Execution Model
// When JavaScript runs, it has 3 main components:

// 1️⃣ Call Stack → Executes synchronous code (one function at a time).
// 2️⃣ Web APIs → Handles async operations (setTimeout, fetch, DOM events).
// 3️⃣ Callback Queue & Microtask Queue → Stores async tasks to be executed later.

// 2️⃣ How Does the Event Loop Work?
// JavaScript runs synchronous code first (using the Call Stack).
// If it encounters an async operation, it hands it off to the Web APIs (like setTimeout).
// Once the async operation is done, its callback is moved to either:
// The Microtask Queue (for Promises, queueMicrotask()).
// The Callback Queue (for setTimeout, setInterval).
// Event Loop constantly checks the Call Stack:
// If it's empty, it pushes the first task from the Microtask Queue.
// If the Microtask Queue is empty, it takes the first task from the Callback Queue.



console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");



// Execution Order:
// 1️⃣ "Start" → Logs immediately (synchronous).
// 2️⃣ setTimeout() → Moves to Web API, scheduled to run after 0ms.
// 3️⃣ Promise.resolve().then() → Moves to the Microtask Queue.
// 4️⃣ "End" → Logs immediately (synchronous).
// 5️⃣ Microtask Queue executes first → "Promise resolved".
// 6️⃣ Callback Queue executes next → "Timeout".

// 🟢 Final Output:

 
// Start  
// End  
// Promise resolved  
// Timeout  


 