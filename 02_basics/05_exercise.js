let cart = {
  company: "Myntra",
  itemName: "Cotton T-Shirt",
  price: 989,
  "delivery-time": "Same day delivery",
};

// let copyCart = cart;
// console.log(cart);

// copyCart.price = 1999;
// console.log(cart);
// copyCart.itemName = "Jeans";
// console.log(cart);

// console.log(cart["delivery-time"]);

let obj = {
  msg: "good job",
  result: "complete",
};

console.log(obj);

let { msg, result } = obj;
console.log(`${msg}
${result}`);
