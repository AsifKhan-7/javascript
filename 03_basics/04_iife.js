//Immediately Invoked Function Expression

(function one() {
  console.log(`DB CONNECTED`);
  //named IIFE
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Asif");
