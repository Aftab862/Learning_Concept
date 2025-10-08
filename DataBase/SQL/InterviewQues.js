// ACID properties

// Atomicity: all or nothing. Either all operations within the transaction are completed successfully, or none of them are

// Consistency: DB moves from valid state to valid state. Consistency in transactions means that the database must remain in a valid state before and after a transaction.

// Isolation: concurrent transactions don’t interfere.

// Durability: committed changes survive crash.Once a transaction has been successfully committed to the database, its changes are permanent and will survive system failures, power outages, and other errors.