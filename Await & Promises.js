// Promise.all()
// Waits for all promises to resolve. If one fails, everything fails.
// The result always in order [p1 ,p2 ,p3] if success else return error.
// .then() is used to execute the function after promise value has resolved otherwise it says promise pending
//👉 Use Case: Best when you need all tasks to succeed together (e.g., fetching multiple APIs).


// Promise.allSettled()

// Waits for all Promises to settle (either resolve or reject). Never fails.
// 👉 Use Case: Best when you want results of all promises, even failed ones.
// [
//     { status: 'fulfilled', value: 10 },
//     { status: 'fulfilled', value: 20 },
//     { status: 'rejected', reason: 'Error occurred' }
//   ]


// Promise.race()
// Returns the result of the first Promise that settles (either resolve or reject).
// output :  not array only single resolved / rejected value
// const slow = new Promise((resolve) => setTimeout(() => resolve(10), 200));
// const fast = new Promise((resolve) => setTimeout(() => resolve(20), 100))
// 👉 Use Case: Best for timeouts or selecting the fastest response.



// 4️⃣ Promise.any()
// Returns the first successfully resolved Promise. Ignores failures.


const fast = Promise.reject("Error occurred");
const slow = Promise.resolve(10);

Promise.race([slow, fast])
    .then(console.log)
    .catch(console.error);  // ❌ Fails immediately due to p3 rejecting
