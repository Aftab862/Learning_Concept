Primitive types are basic data types. They store single values and are immutable (cannot be changed).

Non-primitive types are objects and complex structures. They store multiple values or data.


| Feature    | Primitive      | Non-Primitive (Reference)  |
| ---------- | -------------- | -------------------------- |
| Stored by  | Value          | Reference (memory address) |
| Mutable?   | No (immutable) | Yes                        |
| Comparison | By value       | By reference               |




let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (primitive, copy by value)

let obj1 = { name: "Aftab" };
let obj2 = obj1;
obj2.name = "Ahmad";
console.log(obj1.name); // "Ahmad" (non-primitive, shared reference)
