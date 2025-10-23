/**
 * High Order Function Examples in JavaScript
 *
 * A higher-order function is a function that either takes one or more functions as arguments, and /or returns a function as its result.
 * They are commonly used for abstraction, code reuse, and functional programming patterns.
 * Examples:
 * 1. map: Takes a function and applies it to each element in an array, returning a new array.
 * 2. filter: Takes a function and returns a new array with elements that satisfy the condition defined in the function.
 * 3. reduce: Takes a function and reduces the array to a single value based on the logic defined in the function.
 * 4. forEach: Takes a function and executes it for each element in the array without returning a new array.
 */
// Example 1: map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]
// Example 2: filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // [2, 4]
// Example 3: reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum:', sum); // 15
// Example 4: forEach
console.log('Numbers:');
numbers.forEach(num => console.log(num));