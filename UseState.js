// How useState Works (Concise Explanation)
// Initialization: const [state, setState] = useState(initialValue); creates state with an initial value.
// Updating State: Calling setState(newValue) schedules an update but does not change the state immediately.

// Batching & Re-renders:
// React batches multiple setState calls in the same function and triggers a single re-render after execution.

// Functional Updates:
//  Using setState(prevState => newValue) ensures updates use the latest state when updating multiple times in one function.

// Asynchronous Behavior:
//  The updated state is available only after the next render, so logging state immediately after setState gives the old value.







// How setState Works in React (Step-by-Step)
// 1️⃣ State Updates Are Scheduled, Not Immediate

// When you call setState(), React does not update the state immediately.
// Instead, React schedules the state update and waits for the function to finish executing.
// 2️⃣ React Batches Multiple Updates

// If multiple setState() calls are inside the same function, React groups (batches) them together into a single update.
// 3️⃣ Component Re-renders After Function Execution

// Once the function finishes execution, React triggers a single re-render and updates the state.
// During this re-render, React uses the latest state value and updates the UI.