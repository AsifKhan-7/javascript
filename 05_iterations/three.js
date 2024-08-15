// for of

// const arr = [1, 2, 3, 4, 5];
// const newArr = [];

// for (const element of arr) {
//   newArr.push((element) * 2);
//   console.log(element)
// }

// console.log(newArr);



// const greetings = "Hello World!";

// console.log(`The of the greeting is, ${greetings.length}`);
// for(const greet of greetings) {
//   console.log(`Character is, ${greet}`)
// }


// Map

// const myMap = new Map();

// myMap.set("IN", "Indai");
// myMap.set("UK", "United Kingdom");
// myMap.set("USA", "United States of Americe");
// myMap.set("IN", "Indai");
// // console.log(myMap) // returns an object like {'key' => 'value'} stores unique key value pairs

// for (const [key, value] of myMap) {
//   console.log(key, " => ", value); //print key value together
 
 
// }




// for of loop on literal object

const myObj = {
  game1:"BGMI",
  game2:"Asphlat", // it is not iterable
}

for (const [key, value] of myObj) {
  console.log(myObj[key, value]);
}




// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key}: ${value}`);
// }








// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// Using for...in loop
// for (const key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

// Using for...of loop with Object.values()
// for (const value of Object.values(obj)) {
//   console.log(value);
// }
