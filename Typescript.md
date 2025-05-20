TypeScript includes all the features of JavaScript, plus extra features.

TypeScript allows you to define the type of variables, function parameters, and return values at compile time, so you can catch errors earlier, before running the code.

//using js
function add(a, b) {
  return a + b;
}

//using ts
function add(a: number, b: number): number {
  return a + b;
}



-------------------Type Assignment----------------
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit type assignment are easier to read and more intentional. 
Exp :  let firstName: string = "Dylan";


Implicit - TypeScript will "guess" the type, based on the assigned value:
Exp : let firstName = "Dylan";


---------------------------Type: any---------------
any is a type that disables type checking and effectively allows all types to be used.

