// DOM = the page structure you manipulate(document, nodes, events).

// BOM = browser - provided tools and environment(window, location, history, storage, timers, navigator).

// They interact: window.document links them.Use DOM APIs for content and structure, use BOM APIs for browser - level tasks like navigation, storage, and timers.



// When you click something, the browser doesn’t just say “only this button got clicked.”
// The event travels in phases through the DOM tree:


// Capturing → The principal (root) hears first, then teachers (parent), then students (child).

// Bubbling → The student (child) shouts, teacher hears next, principal last.


// Propagation → پھیلاؤ of events (child → parent → root).

// Delegation → parent handles all children’s events with one listener.

// 🔹 Event Propagation

// Think of sound traveling in a house.

// You are in your room (child) and clap your hands.

// The sound first happens in the room itself (target).

// Then your parents in the living room (parent) also hear it.

// Finally, the sound reaches the main gate (document root).

// 👉 That’s bubbling: sound (event) starts at the room (button) and goes upward through the house (DOM tree).

// 🔹 Event Delegation

// Now imagine you’re at a wedding dinner 🍽️.
// There are 100 tables with guests. The waiter (developer) could:

// Option 1: Place 100 waiters, one at each table, to take orders. (Inefficient → many listeners).

// Option 2 (Delegation): Place 1 waiter at the door (parent). Whenever a guest (child) raises their hand, the waiter looks at who raised it (event.target) and takes the order.

// 👉 This is event delegation: instead of attaching listeners to each guest (button), you attach one listener to the door (parent) and handle requests for everyone



// ------------------------- Why Keys Matter:

// Keys are unique identifiers for elements in a list.
// When you render a list, React uses keys to track which items have changed, been added, or removed between renders.

// on update any item nothing affect on performance with or without keys .. ( it compares by ids if keys provided if not then index)
// on insertion/deletion/sorting  that affects on performance in case of without keys.
// like :
// Now let’s delete C (index 2, key="3").

// | Index | Old | New | What React Does      |
// | ----- | --- | --- | -------------------- |
// | 0     | A   | A   | Keep                 |
// | 1     | B   | B   | Keep                 |
// | 2     | C   | D   | Replace node (C → D) |
// | 3     | D   | E   | Replace node (D → E) |
// | 4     | E   | F   | Replace node (E → F) |
//   .     | ... | ... | ...                  |
//   .     | ... | ... | ...                  |
//   and so on...
// |  1000    | last   | -   | Remove last node     |

//  same as for insertion... nodes replace

// | Action              | Without Keys                       | With Keys                             |
// | ------------------- | ---------------------------------- | ------------------------------------- |
// | Change index 5 item | Updates node at index 5 correctly. | Same result.                          |
// | Change index 0 item | Updates node at index 0.           | Same result.                          |
// | Delete index 2 item | Rebuilds all nodes after index 2.  | Removes one node, shifts efficiently. |
// | Insert at start     | Rebuilds all nodes.                | Inserts one node, reuses others.      |
// | Reorder list        | Rebuilds many nodes.               | Just moves nodes, no rebuild.         |

//  ---------------------in case of with keys--------------------
// With keys, React removes only "C" and reuses D, E, F nodes without rebuilding means not create new node it
// only moved up because it has element with same id.
