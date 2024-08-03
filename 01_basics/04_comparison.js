/* console.log(2 > 3);
console.log(2 >= 3);
console.log(2 < 3);
console.log(2 <= 3);
console.log(2 == 3);
console.log("2" === 2);
console.log(2 != 2);
console.log(2 !== "2"); */

/* console.log("5" > 5);
console.log(5 < "6");
console.log("5" >= 2); */

/* console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); */

/*
The reason is that an equality check == and comparisions "> < >= <=" work differently. 
Comparision converts null to a number, treating it as 0.
That's why (3rd) null >= 0 is true and (1th) null > 0 is false. 
 */

/* console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); */

//===

// console.log("2" === 2);

//Master of  Objects AND Browser's web events




/* ternary operator */

/* let age = 21;
let result = age >= 18 ? "can drive" : "can't drive";
console.log(result); 

function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));

console.log(getFee(false));

console.log(getFee(null));
*/
