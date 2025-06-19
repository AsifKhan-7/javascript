/* 1 .Ask user to input two number using promot and print their possible arithmetic operation results.*/

// let firstInput = Number(prompt("Enter first number"));
// let secondInput = Number(prompt("Enter second number"));
// console.log("Addition", firstInput + secondInput);
// console.log("Substraction", firstInput - secondInput);
// console.log("Multiplication", firstInput * secondInput);
// console.log("Division", firstInput / secondInput);
// console.log("Modulo", firstInput % secondInput);
// console.log("Exponantion", firstInput ** secondInput);

/* 2 .Get user to input a number using prompt and check whether even or odd using temary */

// let userInput = Number(prompt("Enter any number"));
// let finalResult = userInput % 2 === 0 ? "Even" : "Odd";
// console.log(`Number is ${finalResult}`);

/*3 .Check if a number is within a range between 10 and 20 (inclusive). */

// let userInput = Number(prompt("Enter any number"));
// let finalResult =
//   userInput >= 10 && userInput <= 20
//     ? "Yes"
//     : "No";
// console.log(finalResult);

/* 4 .Write a program to find the greatest number between 3 numbers using temary operator. */

// let firstNumber = Number(prompt("Plese enter the first number"));
// let seconNumber = Number(prompt("Plese enter the second number"));
// let thirdNumber = Number(prompt("Plese enter the third number"));

// let greatestNumber =
//   firstNumber > seconNumber
//     ? firstNumber > thirdNumber
//       ? firstNumber
//       : thirdNumber
//     : seconNumber > thirdNumber
//     ? seconNumber
//     : thirdNumber;
// console.log(`Greatest number is: ${greatestNumber}`);

/* 5 .Take an email and password from the user. If the email or password is incorrect or does not match the stored values, display the message "Invalid email or password." If both email and password match the stored values display "You are logged in successfully!" */

// let userEmail = prompt("Please enter your email");
// let userPassword = prompt("Please enter your password");

// let databaseUser = "AdDev";
// let databasePassword = "12345";

// let authenticationMsg =
//   userEmail === databaseUser && userPassword === databasePassword
//     ? "Login Successfully!"
//     : "Invalid email or password.";
// console.log(`${authenticationMsg}`);

/* 6 .What will be the output of console.log(-a) where a = O */
// console.log(~0);

/* 7 .What will be the output of the following JavaScript code? */

// let x = 10,
//   y = 5,
//   z = "10";

// x += y * 2;
// console.log(x);

// let isEqual = x == z;
// console.log(isEqual);

// let isStrictEqual = x === z;
// console.log(isStrictEqual);

// let isLogicTest = (isEqual || isStrictEqual) && !(y > 10);
// console.log(isLogicTest);

// let finalResult = isLogicTest ? ++x : --y;
// console.log(finalResult);

// console.log(1 << 1);
// console.log(7 >> 1);

/* 8 .What will be the output of the following JavaScript code? */

let a = 6,
  b = 3,
  c = "6";

a += b << 1; //Bitwise left shift operator shift true bit from one place to left
console.log(`Value of a: ${a}`);

let d = a & b;
console.log(`Value of d: ${d}`);

let e = a | b;
console.log(`Value of e: ${e}`);

let f = a ^ b;
console.log(`Value of f: ${f}`);

let g = ~a;
console.log(`Value of g: ${g}`);

let check = (a == c && d < e) || !(f === e);
console.log(`Result of check: ${check}`);

let result = check ? typeof g : --b;
console.log(`Final result: ${result}`);
