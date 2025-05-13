
// 🔹 Key Differences from setTimeout():

// setTimeout() runs once, setInterval() runs indefinitely.
// It keeps executing until you stop it using clearInterval().


let timeoutId = setTimeout(() => console.log("Never runs"), 5000);
clearTimeout(timeoutId);  // Stops execution




let intervalId = setInterval(() => console.log("Runs"), 1000);
clearInterval(intervalId);  // Stops execution



// 4️⃣ requestAnimationFrame() – Best for Animations
// Unlike setTimeout() or setInterval(), requestAnimationFrame() runs before the next repaint (usually 60 times per second).

// function animate() {
//     console.log("Animation frame");
//     requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);




// Stopping It with clearInterval()
// If you don’t want it to run forever, you can store the interval ID and clear it later.

 
// let intervalId = setInterval(() => {
//   console.log("Runs every 1 second");
// }, 1000);

// // Stop it after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped!");
// }, 5000);