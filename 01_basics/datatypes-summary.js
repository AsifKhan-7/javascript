// Primitive

// 7 types : Number, Null, String, Symbol, Boolean, BigInt, Undefined

const PI = 3.14;
let outsideTemp = null;
let userEmail = "exaple@11user.com";
let id = Symbol("encrption#@");
let anotherId = Symbol("encrption#@");
let isLoggedIn = false;
let score;
let bigNumber = 2345688735367n;

console.log(id === anotherId);

//Non-primitive(Reference Types)

// Array, Objects and Functions

const heros = ["APJ Abdul Kalam", "Right brothers", "Newton"];

let myObj = {
  name: "Asif",
  role: "Software Development Engineer",
};

let myFunc = function () {
  console.log("This is function");
};

console.log(typeof heros);
