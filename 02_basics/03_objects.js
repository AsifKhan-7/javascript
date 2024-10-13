//singleton => class/constructor se sirf ek hi instance banaya ja sakta hai
// Object.create() => This is the way to create singleton instance

//object literals

const mySym = Symbol("Value");

const jsUser = {
  //by default javascript converts keys in string

  name: "Asif",
  "full name": "Mohd Asif Khan",
  [mySym]: "Key1", //reference of symbol to access the property
  age: 18,
  location: "Delhi",
  email: "coder@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

// console.log(jsUser.email); //accessing the object [1. dot notation 2. bracket notation]

// console.log(jsUser["email"]); //because keys treated as strings behind the scene
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

// jsUser.email = "Coder@microsoft.com";
// console.log(jsUser.email);

// Object.freeze(jsUser);
// jsUser.email = "Coder@chatgpt.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS user");
};

jsUser.greetingOne = function () {
  console.log(`Hello JS user, ${this.email}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingOne());
