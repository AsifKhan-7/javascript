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
console.log(`final count is ${count}`);  //variable can be re-declare with the same name in the same scope using var keyword. This gives no error, if it is var keyword


//======================

