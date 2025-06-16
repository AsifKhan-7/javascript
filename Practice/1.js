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
