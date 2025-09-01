//====== clouser Example====================
// clousers form when inner function has access to its outerfunction variables even after the outer function has finished its execution
// Closures: Allow inner functions to access outer function variables even after the outer function has executed.
// Scope Chain: Variables are resolved by looking first in the local scope, then in outer scopes.
// Usage: Closures are useful for data privacy, currying, encapsulation and more.

function Outer() {
    count = 0;

    return {
        // this return is a object literal  and we cannot assign/declare it directly as function like function Increment (){...}
        Increment: function () {
            // function expression method to declar function as expression in object literal
            console.log(++count);
        },
        Decrement() {
            // method shorhand way to declare function as method in object literal
            console.log(--count);
        },
        PrintValue() {
            console.log('Current Count:', count);
        },
    };
}

let xyz = Outer();

xyz.Increment();
xyz.Decrement();
xyz.PrintValue();
