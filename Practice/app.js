/* On a shopping website, calculate the total cost of products when given the price per item (price = 150) and the quantity (quantity = 3).
Also, calculate the 10% discount on the total cost and display the discounted price */

/* Challenge-1 */
let productPrice = 150;
let productQuantity = 3;
let theTotalCostOfProducts = productPrice * productQuantity;
let theDiscountOnTotalCost = theTotalCostOfProducts * 0.1;
let theDiscountedPrice = theTotalCostOfProducts - theDiscountOnTotalCost;
console.log(`Total Cost of Products: ${theTotalCostOfProducts}`);
console.log(`Discount on Total Cost: ${theDiscountOnTotalCost}`);
console.log(`Discounted Price: ${theDiscountedPrice}`);

let oneNumber = 10;
let result = oneNumber++ + ++oneNumber - 10;
console.log(`Result will be: ${result}`);

/*On a ticket booking website, check if the user's age is valid for ticket booking:
Age should be at least 18.
Write a condition to check and display a message: "Eligible for ticket booking• if the user is 18 or older. "Not eligible for otherwise. */

/* Challenge-2*/
let userAge = 20;
let ticketBookingResult = userAge >= 18 ? "Eligible" : "Not eligible";
console.log(`User is ${ticketBookingResult} for ticket booking.`);

/*On a login page, verify the user's credentials: Check if the username is not empty AND the password is also non empty (&& operator).
If either is empty, display an error message: "Both fields are required."*/

/* Challenge-3 */
let userName = "asif";
let password = "secret";

if (userName !== "" && password !== "") {
  console.log(`Welcome ${userName}.`);
} else {
  console.log("Password is required");
}

let authenticateUser =
  userName !== "" && password !== ""
    ? `Welcome ${userName}.`
    : "Password is required.";

console.log(authenticateUser);

/* Bitwise operator */

console.log(4 & 3);
console.log(9 & 7);
console.log(8 | 11);
console.log(26 | 15);
console.log(~3);
console.log(~0);
console.log(~-5);

/* Short Circuiting */
/* Providing Default Values */
const options = {};
const limit = options.limit || 10;
console.log(limit);

/* Safely accessing nested properties */
const user = { address: { city: "New York" } };
const city = user.address && user.address.city;
console.log(city);

const defaultValue = undefined ?? "Default Value";
console.log(defaultValue);
