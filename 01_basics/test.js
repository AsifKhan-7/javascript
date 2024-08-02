// console.log("ASIF KHAN");
/*JavaScript is First-class Function based programming language */

/* Assigning a function to a variable */

const func = () => {
  console.log("This function is assigned to a variable. This function is also a anonymous function");
};
// func();

/* This function is  assigned as an Anonymous Function in a Variable named (func), then  used that variable to invoke the function by adding parentheses () at the end */

/* const func = arrow =() => {
   console.log("This function is assigned to a variable. This function is a named function");
};
arrow(); */

/*Even ifthe function is named, you can use the variable name or function name to invoke it.*/

/* Passing a function as an argument */

function func1() {
  return "Hello";
}

function func2(func3, name) {
  console.log(func3(), name);
}

// func2(func1, "func2");

/* This also explains how we are treating a function as a value */

function hello() {
  console.log("Hello");
}

function sayHello() {
  console.log(hello());
  
  return hello;
}

console.log(sayHello());
