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

// ----------------------------------interface----------------------------------
// An interface tells the structure of how to interact with something (like an API, a class, or a component).

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
