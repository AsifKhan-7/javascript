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
// console.log(loginUserMessage());

function calculateCartPrice(...value) {
  return value;
}

// console.log(calculateCartPrice(100, 200, 300, 500, 455, 655));

const user = {
  username: "Asif",
  price: 122,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);

const myNewArray = [100, 200, 300, 500];

function returnSecondElement(getArray) {
  return getArray[1];
}

console.log(returnSecondElement(myNewArray));

