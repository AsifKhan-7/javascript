//function

function sayMyName() {
  console.log("A");
  console.log("S");
  console.log("I");
  console.log("F");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {

//   if (number1 === Number && number2 === Number) {
//     console.log(number1 + number2);
//   } else {
//     console.log("Put values with right datatypes");

//   }

// }

function addTwoNumbers(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    // let result = number1 + number2;

    // return result;

    return number1 + number2;
  } else {
    console.log("Put values with right datatypes");
  }
}

const result = addTwoNumbers(1, 3);

// console.log("Result:", result);

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter your username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Sam"));
console.log(loginUserMessage());
