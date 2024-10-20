// let sum = function (num1, num2) {
//   return num1 + num2;
// };

let sumThreeNums = function (num1, num2, num3, sumTwoNums) {
  let sumOfTwoNums = sumTwoNums(num1, num2);
  return sumTwoNums(sumOfTwoNums, num3);
};

// console.log(sumThreeNums(10, 20, 10, sum));

// let timerId = setTimeout(() => {
//   console.log(`Executed`);
// }, 1000);

// console.log(`This log is for to understand timerId: ${timerId}`);
// clearTimeout(timerId);

// let timerId = setInterval(() => {
//   console.log("SetInterval executed");
// }, 1000);

// console.log(`This log is for to understand timerId: ${timerId}`);

// setTimeout(() => {
//   clearInterval(timerId);
// }, 6000);

//problem-1

// let multiply = (num1, num2) => {
//   return num1 * num2;
// };

// console.log(multiply(5, 7));

//problem-2

// let greeting = () => console.log("Hello World!");

// let runTwice = (printGreeting) => {
//   printGreeting();
//   printGreeting();
// };

// runTwice(greeting);

//problem-5

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// nums.forEach((num) => {
//   return (sum += num);
// });
// console.log(sum);

//problem-6
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let squares = nums.map((num) => {
//   return num * num;
// });

// console.log(squares);
