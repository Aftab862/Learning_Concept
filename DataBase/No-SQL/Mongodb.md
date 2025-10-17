MongoDB is a NoSQL database.

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js to intrect. It provides a schema-based solution to model your application data.

A schema defines the structure of a document in MongoDB.

A model is a wrapper around the schema that lets you interact with the collection. like find(), .save(), .updateOne(), .deleteOne(), etc.

-----------------------------key features of MongoDB?------------

Document model (flexible schema)

Powerful querying & indexing (including secondary, geospatial, text indexes)

Aggregation framework for data processing pipelines

High availability via replica sets

Horizontal scaling via sharding

Built-in sharding and in-memory storage engine (WiredTiger)

--------------------------------- BSON vs. JSON?------------

JSON is a text format; BSON (“Binary JSON”) is binary-encoded.

BSON supports extra types (e.g. Date, ObjectId, Int32) and is more efficient for storage/lookup.

---------------------------------find() vs. findOne() ------

1-find() returns an array of matching docs.
2-findOne() returns the first match (a single doc or null).

const usersOver30 = await User.find({ age: { $gt: 30 } }); // array
const firstOver30 = await User.findOne({ age: { $gt: 30 } }); // single doc

--------------------What are indexes, and why are they important?

Indexes speed up query and sort operations by creating a data structure (like a book index) on one or more fields.

✅ 1. Add Index in Your Mongoose Schema
You can define indexes directly in your schema using the { index: true } option.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: { type: String },
email: { type: String, unique: true, index: true }, // Index added here
age: Number
});

const User = mongoose.model('User', userSchema);

✅ 2. Use schema.index() Method
This is useful for compound indexes (indexing on multiple fields).
// Ensure an index on `email` for fast lookups:

const UserSchema = new mongoose.Schema({ name: String, email: String });
UserSchema.index({ email: 1 }); // ascending index on email
module.exports = mongoose.model('User', UserSchema);

------------------------------------perform a text search---------

Create text index:
PostSchema.index({ title: 'text', content: 'text' });

Query:
const hits = await Post.find({ $text: { $search: 'MongoDB' } });

----------------------------How do you perform a regex search?----------------------
// Case-insensitive “aftab” in name:

const users = await User.find({ name: { $regex: /aftab/i } });


$regex → pattern match operator

/@gmail\.com$/ → matches anything that ends with @gmail.com

$ → asserts end of string

\. → matches a literal dot, not “any character”

^af -> mathes anything start with af




----------------------------Upsert-----------------------
An upsert is an “update + insert” operation: if any document(s) match your query filter, MongoDB updates them; if none match, it inserts a new document built from your filter + update.

-------------- skip() and limit()?----------------------------------
limit(n) returns at most n docs.

skip(m) skips the first m docs.

// Pagination: page 2 with 10 per page

const page2 = await User.find()
.sort({ createdAt: -1 })
.skip(10) // skip first 10
.limit(10); // then take 10

Relationships in Mongoose (ref + populate)
--------------------What is a "Reference"?---------------------
In MongoDB, we often connect documents across collections — e.g., a Post references a User.

Instead of duplicating all the user's data in each post, we reference the User by their \_id.

-->user : {type : mongoose.Schema.Types.ObjectId , ref : "User" }

--------------------------What is Aggregation?--------------------
Aggregation is like SQL grouping + FILTER + JOIN + MATH + sorting +limit etc

You process and transform your data into stats, summaries, reports, etc.

----------------------------------$group
This aggregation stage groups documents by the unique _id expression provided.
db.listingsAndReviews.aggregate(
    [ { $group : { _id : "$property_type" } } ] ) // property_type could by and field/column

----------------------------$limit
This aggregation stage limits the number of documents passed to the next stage.
db.movies.aggregate([ { $limit: 1 } ])

----------------------------$project
This aggregation stage passes only the specified fields along to the next aggregation stage.

db.restaurants.aggregate([
{
$project: {
"name": 1,
"cuisine": 1,
"address": 1
}
},
{
$limit: 5
}
])

------------------------------------------$sort
This aggregation stage groups sorts all documents in the specified sort order.
db.listingsAndReviews.aggregate([
{
$sort: { "accommodates": -1 }
},
{
$project: {
"name": 1,
"accommodates": 1
}
},
{
$limit: 5
}
])

--------------------------------------$match
This aggregation stage behaves like a find. It will filter documents that match the query provided.
db.listingsAndReviews.aggregate([
{ $match : { property_type : "House" } }])

This will only return documents that have the property_type of "House".

--------------------------Replace vs update---------------------------------

| Operation      | When to Use                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| `updateOne()`  | When you want to **modify part** of the document                                                                 |
| `replaceOne()` | When you want to **replace the whole** document . All previous fields are removed unless you include them again. |

exp:
{
"\_id": 1,
"name": "John",
"age": 30,
"email": "john@example.com"
}

db.users.updateOne(
{ \_id: 1 },
{ $set: { name: "Aftab" } }
);

result :
{
"\_id": 1,
"name": "Aftab",
"age": 30,
"email": "john@example.com"
}

db.users.replaceOne(
{ \_id: 1 },
{ name: "Aftab" }
);

result:
{
"\_id": 1,
"name": "Aftab"
}

--------------------Schema Validation
MongoDB supports JSON Schema validation. The $jsonSchema operator allows us to define our document structure.
