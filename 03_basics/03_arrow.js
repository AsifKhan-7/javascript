const user = {
  username: "Asif",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this); //print current context
  },
};

// user.welcomeMessage();
// user.username = "Sunny";
// user.welcomeMessage();

// console.log(this);

// function one() {
//   let username = "Asif";
//   console.log(this.username); //this does not refer the context in fuctions like objects
// }
// one();

// const one = function () {
//   let username = "Asif";
//   console.log(this.username); //this does not refer the context in fuctions like objects
// }
// one();

const one = () => {
  let username = "Asif";
  console.log(this.username);
};
// one();



//===================== Arrow Functions ============================

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };



// const addTwo = (num1, num2) =>  num1 + num2; Implicit return

// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username: "Asif"})

console.log("Complicated Calculation:",addTwo(1, 2));