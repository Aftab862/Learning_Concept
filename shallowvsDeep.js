/**
 * 🧩 Shallow Copy vs Deep Copy (JavaScript)
 * 
 * Shallow Copy
 * Creates a new object/array but only copies references to nested objects.
 * Changes in nested data affect both the original and the copy.
 * 
 * Common methods:
 * Spread operator ({...obj}, [...arr])
 * Object.assign({}, obj)
 */

const obj1 = { a: 1, b: { c: 2 } };
const shallow = { ...obj1 };
shallow.b.c = 99;
console.log(obj1.b.c); // 99 (same reference)


/**
 * Deep Copy
 * Creates a completely new, independent clone, including all nested objects and arrays.
 * Changes in the copy don’t affect the original.
 * 
 * Common methods:
 * structuredClone(obj) ✅ (modern)
 * JSON.parse(JSON.stringify(obj)) ⚠️ (simple but limited)
 * Custom recursive function
 */

const obj2 = { a: 1, b: { c: 2 } };
const deep = structuredClone(obj2);
deep.b.c = 99;
console.log(obj2.b.c); // 2 (independent)
