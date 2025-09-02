//  ---------------- What is a REST API?---------------------

// It tells the API: “Always use standard methods (GET, POST, PUT, DELETE)” and "Use URLs to access things".

// -----------------------REST API Characteristics--------------------------------:
// Stateless – Each request is independent (no session saved on server).

// Client-Server – Client handles UI, server handles data & logic.

// Uniform Interface – Uses standard HTTP methods.

// Resource-Based – Works with resources (users, posts, products), each identified by a URL.

// JSON – Data is usually sent/received in JSON format.

// ----------- What's the difference between PUT and PATCH? ---------------------------

// Both are HTTP methods used to update data, but there's a key difference:

// Method	Usage	Meaning
// PUT	Complete Update	Replaces the entire object with a new one
// PATCH	Partial Update	Updates only specific fields of the object

// ----------------------------------Interface----------------------------------
// An interface tells the structure of how to interact with something (like an API, a class, or a component).


// An interface is like a contract that says:

// "If you want to be considered this type, you must have these properties and methods."

// It doesn’t contain actual code—just a blueprint of what’s required.

// You have Class 1 with many methods.

// Class 2 only needs a few of those methods, not all.

// Instead of exposing the entire Class 1, you create an interface (a contract) that lists only the required methods and properties.

// Both classes agree to use that interface.

// This is a form of abstraction because Class 2 only “sees” what’s in the interface, not the entire implementation.




// In REST API:
// The interface is:

// The available URLs (like /api/users)

// The methods allowed (GET, POST, PUT, DELETE)

// The expected input (like a JSON body)

// The response structure (like { "success": true })

// You (the client) must follow this interface to get correct results.

// ------------------------Route Parameters vs Query Parameters---------------------
// req.params is used to extract route parameters.
// It’s used for specific resource identification.
// /users/:id
// req.params.id

// req.query is used to extract query parameters.
// It’s used for searching, filtering, sorting, and pagination.
// /users?role=admin
// 	req.query.role
