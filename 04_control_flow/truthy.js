const userEmail = "a@kahnasif.ai";

if (userEmail) {
  // console.log(`${userEmail}, is the email`);
} else {
  // console.log("Didn't get email");
}

// falsy values

// false ,0, -0, BigInt 0n, "", undefined, null, NaN

// thruthy values

// "0", "false", " ", [], {}, function(){}  // === strict equality operator

const emptyArray = [];

if (emptyArray.length === 0) {
  // console.log("Array is empty");
}

if (Array.isArray(emptyArray) && emptyArray.length === 0) {
  // console.log("Array is empty");
}

const emptyString = "";

if (typeof emptyString === "string" && emptyString.length === 0) {
  // console.log("String is empty");
}

const emptyObject = {};

if (
  typeof emptyObject === "object" &&
  emptyObject !== "null" &&
  Object.keys(emptyObject).length === 0
) {
  // console.log("Object is empty");
}

//emptyObject !== "null", check kar raha hai ke object null nahi h typeof null bhi object return karta hai

// +++++++++++++++++++++++++++++++(==) Returns true+++++++++++++++++++++++++++++++++++++++
// false == 0 => true

// false == "" =>true

// 0 == "" =>true

// +++++++++++++++++++++++++++++++(===) Returns false+++++++++++++++++++++++++++++++++++++++
// false === 0 => false

// false === "" => false

// 0 === "" => false

// Nullish coalescing operator(??)

let val1;

// val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ?? 15;

val1 = undefined ?? 15 ?? 20;
console.log(val1);


//Ternary Operator

// (condition) ? true : false

const iceCoffePrice = 120;

(iceCoffePrice >= 100) ? console.log("more than 100") : console.log("less than 100")