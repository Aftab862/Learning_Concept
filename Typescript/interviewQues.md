// ==========================================
// 📘 TypeScript Interview Notes (Q + A)
// Based on Topics We've Covered So Far
// ==========================================


// 1️⃣ Type Basics & Compilation
// -----------------------------

1. What is TypeScript?
// A superset of JavaScript adding static typing, interfaces, and compile-time checking.

2. How is TypeScript different from JavaScript?
// TypeScript checks types before running; JS checks only at runtime.

3. What happens to TypeScript types at runtime?
// They vanish. TypeScript types exist only at compile time.

4. Why do we use TypeScript?
// To catch type errors early, improve readability, and reduce runtime bugs.

5. How does TypeScript handle implicit vs explicit typing?
// Explicit typing uses annotations; implicit typing infers types from assigned values.


// 2️⃣ any vs unknown
// ------------------

6. Difference between 'any' and 'unknown'?
// any disables type checking; unknown forces you to check before using the value.

7. Why is 'unknown' safer than 'any'?
// Because TS requires a type check (like typeof) before using an unknown value.

8. When should you use 'any'?
// Only when dealing with legacy code or dynamic data you can’t predict.


// 3️⃣ Type System & Function Typing
// ---------------------------------

9. What are Type Annotations?
// Explicitly telling TS the variable or function type, e.g. let age:number = 20;

10. What is Type Inference?
// TS automatically detects type from the assigned value.

11. What is a Union Type?
// A type that can be one of several: e.g. string | number.

12. What is a Type Alias?
// A named shortcut for complex types or unions.

13. What is a Tuple?
// A fixed-length array with specific element types.

14. What is 'readonly' in TypeScript?
// Makes an array or property immutable.

15. Why do we write function return types?
// To ensure consistency and detect unintended returns.


// 4️⃣ Interfaces vs Type Aliases
// ------------------------------

16. What’s the difference between interface and type?
// interface → for object shapes only; type → for unions, primitives, intersections too.

17. Can interfaces extend each other?
// Yes, using 'extends' to inherit properties.

18. Can interfaces and types combine?
// Yes, interface can extend type and vice versa.

19. What is Interface Merging?
// When multiple interfaces with the same name automatically combine.

20. When to prefer interface vs type?
// Use interface for object models; use type for unions or complex combinations.


// 5️⃣ Type Narrowing & Type Guards
// --------------------------------

21. What is Type Narrowing?
// Reducing a broad type (like string | number) to a specific one using checks.

22. How does typeof help in narrowing?
// It checks primitive types like string, number, boolean.

23. How does instanceof help?
// It checks if an object is created from a specific class or constructor.

24. How does the 'in' operator help?
// It checks if a property exists on an object (used for plain object narrowing).

25. What are Custom Type Guards?
// Functions returning `x is Type` to tell TS how to narrow manually.

