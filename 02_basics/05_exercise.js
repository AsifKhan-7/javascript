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

// console.log(obj);

// let { msg, result } = obj;
// console.log(`${msg}
// ${result}`);

function isIdenticalProduct(product1, product2) {
  if (typeof product1 !== "object" || typeof product2 !== "object") {
    console.log("Parameter was passed was not an object");
    return false;
  }
  if (product1 === product2) {
    return true;
  }

  if (
    product1.company === product2.company &&
    product1.itemName === product2.itemName &&
    product1.price === product2.price
  ) {
    return true;
  } else {
    return false;
  }
}

let cart = {
  company: "Myntra",
  itemName: "Cotton Shirt",
  price: 989,
  "delivery-time": "Same day delivery",
};

let cart2 = {
  company: "Myntra",
  itemName: "Cotton Shirt",
  price: 989,
  "delivery-time": "Same day delivery",
};
let cart3 = {
  company: "Myntra",
  itemName: "Cotton Shirt",
  price: 1989,
  "delivery-time": "Same day delivery",
};

console.log(isIdenticalProduct(cart, ""));
console.log(isIdenticalProduct(cart, cart2));
console.log(isIdenticalProduct(cart3, cart2));
console.log(isIdenticalProduct(cart2, cart));

//Object identical hone ka matlab hai, objects ke key-value pair same hone chahiye with same datatypes
