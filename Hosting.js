// Hoisting is a behavior where JavaScript moves variable and function declarations to the top of their containing scope (global or function) before code execution.
// Key Point: Only the declarations are hoisted—not their initializations.

console.log(x); // Outputs: undefined
var x = 5;


// var x; // Declaration hoisted to the top of its scope
// console.log(x); // x exists here, but it's not yet assigned a value, so it is undefined
// x = 5; // The assignment remains in place


// console.log(y);
// let y = 0;


// console.log(x);
// var x = 10;
// console.log(x);




// Understanding the Temporal Dead Zone (TDZ)
// Hoisting of let and const:

// When JavaScript compiles your code, it moves the declarations of variables declared with let or const to the top of their block. This is similar to var.
// Not Initialized Immediately:

// However, unlike var (which gets automatically set to undefined), these variables are not initialized when they are hoisted.
// This means that, although the variable is known to exist, it doesn't have a value until the code execution reaches the line
//  where it's actually declared and assigned.
// The Temporal Dead Zone (TDZ):

// The TDZ is the period between the start of the block and the actual line where the variable is declared.
// During this time, if you try to access the variable, JavaScript will throw a ReferenceError because the variable hasn't been initialized yet.

{
    // The variable 'a' is hoisted to the top of the block,
    // but it is NOT initialized here.

    // Trying to access 'a' in the TDZ:
    console.log(a); // This will throw a ReferenceError.

    // Now we reach the actual declaration and initialization:
    let a = 5;
    console.log(a); // Now this will log 5, because 'a' is initialized.
}
