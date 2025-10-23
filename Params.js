// There are three types of parameters in Nodejs API.
// These are Path Parameters, Query Parameters and Body Parameters.

// Path Parameters: These are part of the URL and are used to identify a specific resource.
// Example: In the URL /users/:id, :id is a path parameter.
// These are called route parameters in Express.js.
// These are accessed using req.params object in Express.js.

const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// To test this, you can run the server and visit http://localhost:3000/users/123
    
// Query Parameters: These are appended to the URL and are used to filter or sort resources.
// Example: In the URL /users?name=John, name=John is a query parameter.
// These are accessed using req.query object in Express.js.
app.get('/users', (req, res) => {
    const userName = req.query.name;
    res.send(`User Name is: ${userName}`);
});

// To test this, you can run the server and visit http://localhost:3000/users?name=John

// Body Parameters: These are sent in the body of the HTTP request and are used to create or update resources.
// Example: In a POST request to /users with a JSON body { "name": "John" }, name is a body parameter.
// These are accessed using req.body object in Express.js.
app.use(express.json()); // Middleware to parse JSON body
app.post('/users', (req, res) => {
    const userName = req.body.name;
    res.send(`User Name is: ${userName}`);
});
// To test this, you can use a tool like Postman to send a POST request to http://localhost:3000/users with a JSON body { "name": "John" }

// In summary:
// Path Parameters: Used to identify specific resources (req.params).
// Query Parameters: Used to filter or sort resources (req.query).
// Body Parameters: Used to create or update resources (req.body).