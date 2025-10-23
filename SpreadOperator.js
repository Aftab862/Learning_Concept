/**
 * Spreaad Operator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * 
 * The spread operator (...) allows an iterable such as an array or string to be expanded
 * in places where zero or more arguments (for function calls) or elements (for array literals)
 * are expected, or an object expression to be expanded in places where zero or more key-value pairs
 * (for object literals) are expected.
 * Examples:
 * 1. Expanding Arrays
 * 2. Merging Arrays
 * 3. Copying Arrays
 */

// Example 1: Expanding Arrays
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3
// Example 2: Merging Arrays
const moreNumbers = [4, 5, 6];
const merged = [...numbers, ...moreNumbers];
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]
// Example 3: Copying Arrays
const copyOfNumbers = [...numbers];
console.log(copyOfNumbers); // Output: [1, 2, 3]

// Example 4: Expanding Strings
const str = "Hello";
const chars = [...str];
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

// Example 5: Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
// Example 6: Copying Objects
const copyOfObj1 = { ...obj1 };
console.log(copyOfObj1); // Output: { a: 1, b: 2 }

// Note: The spread operator creates a shallow copy of the original array or object.
// Modifying the copy does not affect the original.
// Example 7: Using Spread with Function Calls
function sum(x, y, z) {
    return x + y + z;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // Output: 6

// Example 8: Using Spread with Rest Parameters
function myFunction(...args) {
    console.log(args);
}
myFunction(...numbers); // Output: [1, 2, 3]

/**
 * Summary:
 * The spread operator is a powerful feature in JavaScript that allows for easy manipulation of arrays and objects.
 * It can be used to expand, merge, and copy data structures, making code more concise and readable.
 */