// Here are 30 most frequently asked JavaScript interview questions:

// - What is the difference between let, var, and const?
// - Explain == vs ===.
// - What are closures in JavaScript?
// - What is hoisting in JavaScript?
// - Explain the concept of promises.
// - What is the event loop?
// - What is the difference between synchronous and asynchronous code?
// - Explain the purpose of async and await.
// - How does the this keyword work in JavaScript?
// - What are arrow functions?
// - What is the difference between null and undefined?
// - What is event delegation?
// - What are JavaScript prototypes?
// - What is the difference between function declaration and function expression?
// - How does inheritance work in JavaScript?
// - What is the spread operator (...)?
// - What is destructuring in JavaScript?
// - Explain the purpose of call(), apply(), and bind().
// - What is the purpose of the map(), filter(), and reduce() methods?
// - What is memoization?
// - Explain the difference between deep copy and shallow copy.
// - What are Immediately Invoked Function Expressions (IIFE)?
// - What is the difference between localStorage and sessionStorage?
// - What is the purpose of try, catch, and finally?
// - What is an event listener in JavaScript?
// - What are the differences between forEach() and map()?
// - How does debouncing and throttling work?
// - Explain module imports and exports in JavaScript.
// - What is JSON and how is it used in JavaScript?
// - How do you prevent a default action in an event handler?

// 1. Program to find longest word in a given sentence ?
// 2. How to check whether a string is palindrome or not ?
// 3. Write a program to remove duplicates from an array ?
// 4. Program to find Reverse of a string without using built-in method ?
// 5. Find the max count of consecutive 1’s in an array ?
// 6. Find the factorial of given number ?
// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
// 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
// 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
// 10. Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
// 11. Write a JavaScript program to find the maximum number in an array.
// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// 13. Write a JavaScript function to check if a given number is prime.
// 14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// 16. Given a string, write a javascript function to count the occurrences of each character in the string.
// 17. Write a javascript function that sorts an array of numbers in ascending order.
// 18. Write a javascript function that sorts an array of numbers in descending order.
// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.
// 21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}

//    -------------------------program to find vowels and consonents from large string-------------------
const abc =
  "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!";

let con = [];
let vow = ["a", "e", "i", "o", "u"];
let newVow = [];

for (let i = 0; i < abc.length; i++) {
  if (vow.includes(abc[i])) {
    newVow.push(abc[i]);
  } else {
    con.push(abc[i]);
  }
}

console.log("Vowels", newVow);
console.log("Consonants", con);

//    -------------------------program to remove duplicate elements from string-------------------

let newStr = [];

for (let i = 0; i < abc.length; i++) {
  if (!newStr.includes(abc[i])) {
    newStr += abc[i];
  }
}

console.log("New String", newStr);

//    -------------------------program to find the individual character length from string-------------------

// const uniqueResult = "lorem ipsudtacng.V,q!";
// OutPutResult[
//   ({ l: 4 },
//   { o: 5 },
//   { r: 3 },
//   { e: 6 },
//   { m: 3 },
//   { " ": 9 },
//   { i: 8 },
//   { p: 3 },
//   { s: 4 },
//   { u: 4 },
//   { d: 2 },
//   { t: 7 },
//   { a: 4 },
//   { c: 3 },
//   { n: 2 },
//   { g: 1 },
//   { ".": 1 },
//   { V: 1 },
//   { ",": 1 },
//   { q: 1 },
//   { "!": 1 })
// ];

const uniqueArray = [...new Set(abc.split(""))];
const wholeStr = Array.from(abc);
const result1 = [];
let count = 0;
for (let i = 0; i < uniqueArray.length; i++) {
  for (let j = 0; j < wholeStr.length; j++) {
    if (uniqueArray[i] === wholeStr[j]) {
      count++;
    }
  }

  result1.push({ [uniqueArray[i]]: count });
  count = 0;
}

console.log("Result1", result1);

// -------------------------program to find the unique characters from string using loop-------------------

// const abc =
//   "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!";

// let newStr = [];

// for (let i = 0; i < abc.length; i++) {
//   let unique = true;

//   for (let j = 0; j < newStr.length; j++) {
//     if (abc[i] === newStr[j]) {
//       unique = false;
//       break;
//     }
//   }

//   if (unique) {
//     newStr.push(abc[i]);
//   }
// }

// console.log("Unique characters:", newStr.join(""));

// -------------------------program to make reverse string words-------------------
function reverseEachWord(sentence) {
  // Split the sentence into individual words
  let wordList = sentence.split(" ");
  console.log("Words:", wordList, wordList.length);

  // This will hold the reversed words
  let reversedList = [];

  // Loop through each word
  for (let word of wordList) {
    let reversed = "";

    // Go through the word backwards
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i]; // Add each character in reverse
    }

    // Add the reversed word to the list
    reversedList.push(reversed);
  }

  // Join them back into a sentence
  return reversedList.join(" ");
}

// Example usage:
console.log(reverseEachWord("hello world")); // "olleh dlrow"
const inputString = "hy aftab ahmad";
const reversedString = reverseEachWord(inputString);

console.log("Original:", inputString);
console.log("Reversed:", reversedString);
// --------------------------------------------Recursive------------------------------------------------

const folderStructure = [
  {
    name: "Folder1",
    children: [
      {
        name: "Subfolder1-1",
        children: [],
      },
      { name: "Subfolder1-2", children: [] },
    ],
  },
  {
    name: "Folder2",
    children: [
      {
        name: "Subfolder2-1",
        children: [{ name: "Subfolder2-1-1", children: [] }],
      },
    ],
  },
  {
    name: "Folder3",
    children: [],
  },
];

// output = [
//   "Folder1",
//   "Subfolder1-1",
//   "Subfolder1-2",
//   "Folder2",
//   "Subfolder2-1",
//   "Subfolder2-1-1",
//   "Folder3",
// ];

// let result = [];
// function traverse(node) {
//   result.push(node.name);
//   node?.children?.forEach((child) => traverse(child));
// }

// folderStructure.forEach((node) => traverse(node));
// console.log(result);

// =======================================================print all paths =================================================
// output = [
//   "Folder1",
//   "Folder1 > Subfolder1-1",
//   "Folder1 > Subfolder1-2",
//   "Folder2",
//   "Folder2 > Subfolder2-1",
//   "Folder2 > Subfolder2-1 > Subfolder2-1-1",
//   "Folder3",
// ];

// let result = [];
// function traverse(node, path = "") {
//   const currentPath = path ? `${path} > ${node.name}` : node.name;
//   result.push(currentPath);
//   node?.children?.forEach((child) => traverse(child, currentPath));
// }

// folderStructure.forEach((node) => traverse(node));
// console.log(result);
//=======================================================count depth =================================================
// output = [
//   { name: "Folder1", depth: 0 },
//   { name: "Subfolder1-1", depth: 1 },
//   { name: "Subfolder1-2", depth: 1 },
//   { name: "Folder2", depth: 0 },
//   { name: "Subfolder2-1", depth: 1 },
//   { name: "Subfolder2-1-1", depth: 2 },
//   { name: "Folder3", depth: 0 },
// ];

// let result = [];
// function traverse(node, depth = 0) {
//   result.push({ name: node.name, depth: depth });
//   node?.children?.forEach((child) => traverse(child, depth + 1));
// }

// folderStructure.forEach((node) => traverse(node));
// console.log(result);

//---------------write a function to search for a target value. You must return the index of the
// target if found, otherwise return -1.

// function searchRotatedArray(arr , target){

//     for (let num of arr){
//         console.log(num)
//         if(num===target){
//             return arr.indexOf(num);
//         }
//     }
//     return -1

// }
// const arr = [4,5,6,7,0,1,2], target = 7

// const value=searchRotatedArray(arr, target);
// console.log("value", value)

// ------------------find the length of the longest substring that contains only unique characters

// function longestUniqueSubstring(s){
// let maxLength=0;
// for( let i=0 ;  i < s.length ; i++){
//   let result=[];

//   for (let j=i;  j<s.length ;j++){
//     if(result.includes(s[j])){
//       break;
//     }
//     else{
//       result.push(s[j]);

//     }

//     if( result.length> maxLength){
//       maxLength= result.length
//     }
//   }

//   return maxLength
// }

// }
// const str="abcabcbb";
// console.log(longestUniqueSubstring(str))

// ---------------find frequency of each characte and for ...in Loop for object itration keys  ---------------------
// const abc = "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!";
// let obj = {};

// for (let i of abc) {
//   obj[i] = (obj[i] || 0) + 1;
// }

// console.log(obj)

// for (let val in obj) {
//   console.log(val, obj[val])
// }

// for (let [key, value] of Object.entries(obj)) {
//   console.log(`Key: ${key}, Value: ${value}`);
// }

// 🔁 for...in   vs   for...of – Key Differences

// Returns	:Keys (property names or indices)	, Values of the iterable
// Usecase	:Best for objects	Best for arrays, strings, sets

// --------------------flat an array using recursion------------------------------------

function flatenFuntion(data, result = []) {
  if (Array.isArray(data)) {
    data.forEach((item) => {
      flatenFuntion(item, result); // Recursive call
    });
  } else {
    result.push(data);
  }
  return result;
}

const myArr = [1, 2, [3, [4, [5], 6], 7], 8];
let result = [];
console.log(flatenFuntion(myArr, result));

//-------------------------------------traverse and found if sum of 2 values = target value --------
const nums = [1, 2, 4, 5, 8];

for (let n = 0; n < nums.length; n++) {
  let cont = true;
  for (let j = 0; j < nums.length; j++) {
    if (nums[n] + nums[j] === 9) {
      console.log(" found  : i+j===9", nums[n], nums[j]);
      cont = false;
      break;
    }
  }

  if (!cont) {
    break;
  }
}

// -------------------------------------Calculate the sum of all elements in this longest unique subarray.
// function longestUniqueSubarray(s) {
//   let maxLength = 0;
//   let finalResult = [];
//   for (let i = 0; i < s.length; i++) {
//     let result = [];

//     for (let j = i; j < s.length; j++) {
//       if (result.includes(s[j])) {
//         break;
//       }
//       else {
//         result.push(s[j]);

//       }

//       if (result.length > maxLength) {
//         maxLength = result.length
//         finalResult = result;
//       }
//     }

//   }
//   return finalResult

// }

// // Example usage
// const nums = [2, -1, 3, 4, -1, 2, 1, -5, 4];
// const res = longestUniqueSubarray(nums); // Output: 6
// console.log("Response ", res)
// let sum = 0;
// for (let i of res) {
//   sum = sum + i;
// }

// console.log(sum)

// -------------------------------------------------Valid Parentheses------------

function isValid(s) {
  const stack = [];

  // We will check closing brackets against their matching opening ones
  function isMatching(open, close) {
    if (open === "(" && close === ")") return true;
    if (open === "{" && close === "}") return true;
    if (open === "[" && close === "]") return true;
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If it's an opening bracket, push it to the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // If it's a closing bracket, check with the last opening bracket
    else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        // No opening bracket to match with
        return false;
      }
      const lastOpen = stack.pop();
      if (!isMatching(lastOpen, char)) {
        // The popped opening bracket does not match the closing one
        return false;
      }
    }
    // If the character is not a bracket, you can choose to ignore or handle differently
  }

  // After checking all characters, stack should be empty if all brackets matched
  return stack.length === 0;
}

// Example test:
console.log(isValid("{[()]}")); // true
console.log(isValid("{[(])}")); // false
console.log(isValid("{{[[(())]]}}")); // true

//--------------------------------Bubble Sort---------------------------
function BuubleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
const array1 = [2, 32, 4, 4, 2, 4, 2, 4, 2, 4, 23, 4];
console.log(BuubleSort(array1));
// --------------------------------Bubble Sort by Frequency---------------------------
function bubbleSortByFrequency(arr) {
  let obj = {};
  for (let n of arr) {
    obj[n] = (obj[n] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let freq1 = obj[arr[j]];
      let freq2 = obj[arr[j + 1]];

      if (freq1 < freq2 || (freq1 === freq2 && arr[j] > arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example
const array = [2, 23, 4, 4, 2, 4, 2, 4, 2, 4, 23, 4, 1];
console.log(bubbleSortByFrequency(array));
