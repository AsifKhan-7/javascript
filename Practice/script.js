/*1- Guess the output */

let x = 100;
let y = x++;
let z = ++x;

let n = x == y ? z++ : ++z;
console.log(`The value of n is: ${n}`);
/* n will be 103 */

/*2- Guess the output */
const f = new Boolean(false);
if (f) {
  console.log(1);
} else {
  console.log(2);
}
console.log("f is an", typeof f);
/*1, f is an object */

/*3- Guess the output */
const obj = {
  x: 1,
  y: 2,
};

let { x: a, y: b } = obj;
a = 2;
console.log(obj.x, obj.y);
/* 1,2 */

/*4- Guess the output */
const obj1 = {};

obj1.value = undefined;
console.log(Object.hasOwn(obj1, "value"));
/* true */

/*5- Guess the output */
console.log("9".charCodeAt(0), "19".charCodeAt(0));
console.log("09".charCodeAt(0), "19".charCodeAt(0));

console.log("9" > "19");
console.log("09" > "19");
/* true, false */

/*6- Guess the output */
console.log(1 + 2 + "1");
console.log("1" + 1 + 2);
/* 31, 112 */

/*7- Guess the output */
let bar = function foo() {};
// console.log(bar === foo);
/* ReferenceError: foo is not defined */

/*8- Guess the output */
let obj2 = {
  timedout: setTimeout(() => {
    console.log(1);
  }, 1000),
};

delete obj2.timedout; // delete kar diya setTimeout ko
obj2 = null; //object ka reference null kar diya/reference khatam kar diya
// setTimeout function ab bhi chalega kyunki event loop me hai. isliye setTimeout ka callback 1 second baad chalega
/* 1 */
