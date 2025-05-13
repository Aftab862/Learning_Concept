// -------------------------------------Call() ----------------------------------
// Calls the function immediately with a given this value and arguments passed individually.

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = { name: "Alice" };

// // Using call to invoke the function immediately
// greet.call(person, "Hello", "!");

// -------------------------------------Apply() ----------------------------------
// Works just like call(), but arguments are passed as an array.
// greet.apply(user, ["Hi", "."]); // Hi, Alice.

// -------------------------------------Bind() ----------------------------------
// Returns a new function with this permanently set—does not call the function immediately.
// const greetAftab = greet.bind(user, 'Hey', '!');
// greetAftab(); // Hey, Aftab!
//

// ----------------------------Quick Comparison--------------------

// Method | Calls function immediately | Arguments passed as | Returns
// call | ✅ Yes | Individual values | Result
// apply | ✅ Yes | Array | Result
// bind | ❌ No (returns a function) | Individual values | Function

// --------------✅ Why we use call, apply, and bind--------------------
// They allow you to:

// Borrow methods from one object for another.

// Ensure a function runs in the correct context (this).

// Pass different arguments dynamically.

// Use delayed or pre-configured functions (in case of bind).

// -----------------------------Example------------------
// const person1 = {
//     name: "Aftab",
//     greet: function () {
//       console.log(`Hello, I am ${this.name}`);
//     },
//   };

//   const person2 = { name: "Ali" };

//   // Borrow greet method from person1 and use it on person2
//   person1.greet.call(person2); // Hello, I am Ali
