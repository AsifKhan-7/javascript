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

// console.log(id === anotherId);

//Non-primitive(Reference Types)

// Array, Objects and Functions

const heros = ["APJ Abdul Kalam", "Right brothers", "Newton"];

let myObj = {
  name: "Asif",
  role: "Software Development Engineer",
};

let myFunc = function () {
  // console.log("This is function");
};

// console.log(typeof heros);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-primitive)

let ideName = "Visual Studio Code";

let newName = ideName;
newName = "Intellij";

// console.log(ideName);
// console.log(newName);

let user = {
  email: "user@google+.com",
  role: "busineesman",
};

let user2 = user;

user2.email = "user@yahoo.com";

console.log(user.email);
console.log(user2.email);

