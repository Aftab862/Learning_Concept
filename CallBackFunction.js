/**
 * This module demonstrates the use of Callback functions in JavaScript.
 * 
 * A callback function is a function passed into another function as an argument,
 * which is then invoked inside the outer function to complete some kind of routine or action.
 */

// Example of a Callback Function
function fetchData(callback) {
    // Simulating a data fetch with a timeout
    setTimeout(() => {
        const data = { name: "John Doe", age: 30 };
        // Invoking the callback function with the fetched data
        callback(data);
    }, 2000);
}   

// Using the fetchData function with a callback
fetchData(function(data) {
    console.log("Fetched Data:", data);
});
// Example of using an arrow function as a callback
fetchData((data) => {
    console.log("Fetched Data with Arrow Function:", data);
});
//------------------------------------------if we use mixed direct and functional update---------------------
//   function handleClick() {
//     setCount(count + 1);             // direct update
//     setCount(prev => prev + 1);      // functional update
//     setCount(count + 1);             // direct update again
//   }
// setCount(count + 1) → this uses stale count = 0 → enqueues 1.
// setCount(prev => prev + 1) → React says: “wait, I’ll apply this to the latest value” → takes the result of previous update (1) → enqueues 2.
// setCount(count + 1) → again uses stale count = 0 → enqueues 1.
// final output is: 1;

/**
 * Summary:
 * Callback functions are essential in JavaScript for handling asynchronous operations,
 * event handling, and functional programming patterns. They allow for greater flexibility
 * and control over the execution flow of code.
 */