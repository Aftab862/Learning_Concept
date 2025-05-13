
// Event-Driven Programming Works in JavaScript
// JavaScript is called an event - driven language because it primarily works by responding to events—
// such as user interactions(clicks, key presses, form submissions), browser events(page load, resize),
//  or server responses(data fetching, WebSockets, etc.).

// Event Listeners: JavaScript waits for events and executes specific functions(called event handlers) when those events occur.


// console.log("Start");
// setTimeout(() => {
//     console.log("This runs after 2 seconds");
// }, 2000);
// console.log("End");


// Event Loop & Callback Queue:
// JavaScript has an event loop that continuously checks for events and executes their associated callbacks.
// If an event occurs, JavaScript pushes its handler function to the callback queue and waits until the main execution thread is free to process it.



// Web APIs & Asynchronous Operations
// JavaScript delegates async tasks (like fetch(), setTimeout(), DOM events) to Web APIs provided by the browser.
// Once completed, they are added back to the callback queue and processed when the call stack is free.



// Promises & Microtask Queue (More Optimized Than Callbacks)
// JavaScript also has a Microtask Queue (higher priority than callback queue) that handles Promises & Async/Await.
// console.log("Start");
// setTimeout(() => console.log("Timeout Callback"), 0);
// Promise.resolve().then(() => console.log("Promise Resolved"));
// console.log("End");


// setTimeout(() => console.log("Timeout Callback"), 0); goes to the callback queue.
// Promise.resolve().then(...) goes to the microtask queue, which runs before the callback queue.





// // 🎯 Key Takeaways
// JavaScript remains single-threaded but supports async operations via event-driven mechanisms.
// 2️⃣ Event Loop makes it non-blocking by handling async tasks efficiently.
// // 3️⃣ Web APIs handle async operations like setTimeout, fetch(), DOM events.
// Promises & async/await execute before setTimeout() and setInterval().
// 4️⃣ Callback Queue vs Microtask Queue

// Microtask Queue (Promises, Async/Await) has higher priority than Callback Queue (setTimeout).