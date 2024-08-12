// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // var c = 30;
  // console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "asif";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one();

if (true) {
  const username = "asif";

  if (username === "asif") {
    const website = " youtube";

    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

console.log(addOne(5));

function addOne(num) {// this follws hoisting
  return num + 1;
}

console.log(addTwo(5));

const addTwo = function (num) { //function expression can not be accessed before initialization  this does not follw hoisting
  return num + 2;
};

//+++++++++++++++++++ Closure +++++++++++++++++++++++++++++++++++++
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let myClosure = outerFunction();

// myClosure();  // Example of closure
