const accountId = 123455;
let accountEmail = "email@google.com";
var accountPassword = "@#Pass55653word";

accountCity = "Delhi"; //never define and use a variable without any variable declaring keyword

accountEmail = "BB-01@coding.com";
accountPassword = "@#_223231Pass_";
accountCity = "Hyderabad";
/*
prefer not to use var 
because of issue in block and functional scope
*/

// console.table([accountId, accountEmail, accountPassword, accountCity]);

//=================================================================================

/* scopes of varibale */

// var keyword

var number = 10;
// console.log(number);

function test() {
  var anotherNumber = 50;
  // console.log(number, anotherNumber);
}
//var has global and function scope, globally declared variable can be accessed inside the fuction but within the function declared variable can not accessible outside the function

test();
// console.log(number);
// console.log(anotherNumber); Can not be accessible outside the function

var count = 11;
var count = 22;
count = 25;
// console.log(`final count is ${count}`);
//variable can be re-declare with the same name in the same scope using var keyword. This gives no error.

//======================

// let keyword

/* let numberOne = 12;
function one() {
  let numberTwo = 13;
  console.log(numberOne, numberTwo);
}
console.log(numberTwo);

one(); */

/* let numberOne = 10;
function f() {
  if (true) {
    let numberTwo = 11;
    console.log(numberTwo);
  }
  console.log(numberTwo);
}
f();
console.log(numberOne); 

This is the example of block scope
*/

/* let a = 10;

if (true) {
  let a = 100;
  console.log(a);
}

console.log(a);

 It can be re-declared in the different scope.
*/

/*
 let a = 10;
 a = 50;
 console.log(a);
 It can be updated but cannot be re-declared in the same scope.
 */

/* const keyword

 The const keyword has all the properties that are the same as the let keyword, except the user cannot update it and have to assign it with a value at the time of declaration. */

// let petName = "Rocky"; // Global variable

function myFunction() {
  fruit = "apple"; // Considered global because declared without keyword
  // console.log(typeof petName + " - " + "My pet name is " + petName);
}
myFunction();

console.log(
  // typeof petName + "- " + "My pet name is " + petName + " Fruit name is " + fruit
);



let petName1;
function myfunction() {
  let petName = "Sizzer"; // local variable
  console.log(petName);
}
function anotherFunc() {
  let petName = "Tom"; // local variable
  console.log(petName);
}
console.log(petName1);
myfunction();
anotherFunc();