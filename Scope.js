// Definition:
// A variable declared with var is accessible anywhere within the function it’s declared in, regardless of any inner blocks (like if, for, or { }).
// Implication:
//  Even if you declare a var variable inside an if block or loop, it "escapes" that block and becomes available throughout the entire function.

function testVarScope() {
    if (true) {
        var a = 10; // Declared with var inside a block
    }
    console.log(a); // Outputs 10 because a is function-scoped
}

testVarScope();

function testBlockScope() {
    if (true) {
        let b = 20; // Block-scoped variable with let
        const c = 30; // Block-scoped variable with const
        console.log(b, c); // Works here: Outputs 20 and 30
    }
    // console.log(b); // Error: b is not defined
    // console.log(c); // Error: c is not defined
}

testBlockScope();


// var: Function-scoped, can be re-declared, and hoisted with undefined.
var abc = 10;
var abc = 20;
console.log(abc)
// let: Block-scoped, cannot be re-declared in the same block, and hoisted without initialization.
// const: Block-scoped, must be initialized immediately, and cannot be re-assigned (though object properties can change).