// Debouncing: Delays the execution of a function until a specified period of inactivity has passed.
// The function runs only once after the action stops.

// Throttling: Ensures a function runs at fixed time intervals, no matter how often the event is triggered.
// It ignores extra calls between intervals.




// Debounce = “wait for no activity, then run once.”
// Think: “Wait until the user stops typing, then search.”

// Throttle = “run regularly at intervals, ignoring extra calls
// Think: “Update scroll position every 200ms, even if scrolling is nonstop.


// const debounce = (fun, delay) => {
//     let timer;
//     return (...arguments) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => fun(...arguments), (delay));
//     }
// }

// const search = debounce((text) => console.log("Searching:", text), 500);
// search("a");  // cancel previous, start timer
// search("ab"); // cancel previous, start timer
// search("abc"); // cancel previous, start timer


// function throttle(fun, limit) {
//     let lastCall = 0;
//     return (...arg) => {
//         const now = Date.now();
//         if (now - lastCall >= limit) {
//             fun(...arg);
//             lastCall = now;
//         }
//     }
// }

// const clickHandler = throttle(() => console.log("Button clicked!"), 1000);
// const clickHandler = throttle(() => console.log("Button clicked!"), 1000);
// const clickHandler = throttle(() => console.log("Button clicked!"), 1000);
// const clickHandler = throttle(() => console.log("Button clicked!"), 1000);


